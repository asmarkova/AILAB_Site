import * as THREE from "three"
import { periodicNoiseGLSL } from "./utils"

export class DofPointsMaterial extends THREE.ShaderMaterial {
  constructor() {
    super({
      vertexShader: /* glsl */ `
      uniform sampler2D positions;
      uniform sampler2D initialPositions;
      uniform float uTime;
      uniform float uFocus;
      uniform float uFov;
      uniform float uBlur;
      uniform float uPointSize;
      varying float vDistance;
      varying float vPosY;
      varying vec3 vWorldPosition;
      varying vec3 vInitialPosition;
      varying float vParticleId;
      void main() {
        vec3 pos = texture2D(positions, position.xy).xyz;
        vec3 initialPos = texture2D(initialPositions, position.xy).xyz;
        vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
        gl_Position = projectionMatrix * mvPosition;
        vDistance = abs(uFocus - -mvPosition.z);
        vPosY = pos.y;
        vWorldPosition = pos;
        vInitialPosition = initialPos;
        vParticleId = position.x * 1000.0 + position.y;
        gl_PointSize = max(vDistance * uBlur * uPointSize, 3.0);
      }`,
      fragmentShader: /* glsl */ `
      uniform float uOpacity;
      uniform float uRevealFactor;
      uniform float uRevealProgress;
      uniform float uTime;
      uniform float uColorR;
      uniform float uColorG;
      uniform float uColorB;
      uniform float uSparkleSpeed;
      uniform sampler2D uAsciiTexture;
      uniform float uUseAscii;
      uniform float uCharCount;
      varying float vDistance;
      varying float vPosY;
      varying vec3 vWorldPosition;
      varying vec3 vInitialPosition;
      varying float vParticleId;
      uniform float uTransition;

      ${periodicNoiseGLSL}

      float sparkleNoise(vec3 seed, float time) {
        float hash = sin(seed.x * 127.1 + seed.y * 311.7 + seed.z * 74.7) * 43758.5453;
        hash = fract(hash);

        float slowTime = time * 1.0;

        float sparkle = 0.0;
        sparkle += sin(slowTime + hash * 6.28318) * 0.5;
        sparkle += sin(slowTime * 1.7 + hash * 12.56636) * 0.3;
        sparkle += sin(slowTime * 0.8 + hash * 18.84954) * 0.2;

        float hash2 = sin(seed.x * 113.5 + seed.y * 271.9 + seed.z * 97.3) * 37849.3241;
        hash2 = fract(hash2);

        float sparkleMask = sin(hash2 * 6.28318) * 0.7;
        sparkleMask += sin(hash2 * 12.56636) * 0.3;

        if (sparkleMask < 0.3) {
          sparkle *= 0.05;
        }

        float normalizedSparkle = (sparkle + 1.0) * 0.5;
        float smoothCurve = pow(normalizedSparkle, 4.0);
        float blendFactor = normalizedSparkle * normalizedSparkle;
        float finalBrightness = mix(normalizedSparkle, smoothCurve, blendFactor);

        return 0.7 + finalBrightness * 1.3;
      }

      float sdCircle(vec2 p, float r) {
        return length(p) - r;
      }

      void main() {
        vec2 cxy = 2.0 * gl_PointCoord - 1.0;

        float mask;
        if (uUseAscii > 0.5) {
          float charIndex = mod(floor(vParticleId * 7919.0), uCharCount);
          float atlasSize = ceil(sqrt(uCharCount));
          float cellSize = 1.0 / atlasSize;

          float charX = mod(charIndex, atlasSize);
          float charY = floor(charIndex / atlasSize);

          vec2 cellOffset = vec2(charX, charY) * cellSize;
          vec2 cellUV = gl_PointCoord * cellSize + cellOffset;

          vec4 texColor = texture2D(uAsciiTexture, cellUV);
          mask = texColor.r;
          if (mask < 0.1) discard;
        } else {
          float sdf = sdCircle(cxy, 0.5);
          if (sdf > 0.0) discard;
          mask = 1.0;
        }

        float distanceFromCenter = length(vWorldPosition.xz);

        float noiseValue = periodicNoise(vInitialPosition * 4.0, 0.0);
        float revealThreshold = uRevealFactor + noiseValue * 0.3;

        float revealMask = 1.0 - smoothstep(revealThreshold - 0.2, revealThreshold + 0.1, distanceFromCenter);

        float sparkleBrightness = sparkleNoise(vInitialPosition, uTime * uSparkleSpeed);

        float alpha = (1.04 - clamp(vDistance, 0.0, 1.0)) * clamp(smoothstep(-0.5, 0.25, vPosY), 0.0, 1.0) * uOpacity * revealMask * uRevealProgress * sparkleBrightness * mask;

        vec3 particleColor = vec3(uColorR, uColorG, uColorB);
        gl_FragColor = vec4(particleColor, mix(alpha, sparkleBrightness - 1.1, uTransition));
      }`,
      uniforms: {
        positions: { value: null },
        initialPositions: { value: null },
        uTime: { value: 0 },
        uFocus: { value: 5.1 },
        uFov: { value: 50 },
        uBlur: { value: 30 },
        uTransition: { value: 0.0 },
        uPointSize: { value: 2.0 },
        uOpacity: { value: 1.0 },
        uRevealFactor: { value: 0.0 },
        uRevealProgress: { value: 0.0 },
        uColorR: { value: 0.6 },
        uColorG: { value: 0.0 },
        uColorB: { value: 1.0 },
        uSparkleSpeed: { value: 1.0 },
        uAsciiTexture: { value: null },
        uUseAscii: { value: 0.0 },
        uCharCount: { value: 1.0 },
      },
      transparent: true,
      depthWrite: false,
    })
  }
}
