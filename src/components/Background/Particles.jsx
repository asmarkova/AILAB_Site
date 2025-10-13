import * as THREE from "three"
import { useMemo, useState, useRef } from "react"
import { createPortal, useFrame } from "@react-three/fiber"
import { useFBO } from "@react-three/drei"
import { DofPointsMaterial } from "./shaders/pointMaterial"
import { SimulationMaterial } from "./shaders/simulationMaterial"
import * as easing from "maath/easing"

export function Particles({
  speed,
  aperture,
  focus,
  size = 512,
  noiseScale = 1.0,
  noiseIntensity = 0.5,
  timeScale = 0.5,
  pointSize = 2.0,
  opacity = 1.0,
  planeScale = 1.0,
  useManualTime = false,
  manualTime = 0,
  introspect = false,
  colorR = 0.6,
  colorG = 0.0,
  colorB = 1.0,
  sparkleSpeed = 1.0,
  blur = 30.0,
  asciiChar = "●",
  useAscii = false,
  ...props
}) {
  const revealStartTime = useRef(null)
  const [isRevealing, setIsRevealing] = useState(true)
  const revealDuration = 3.5

  const simulationMaterial = useMemo(() => {
    return new SimulationMaterial(planeScale)
  }, [planeScale])

  const target = useFBO(size, size, {
    minFilter: THREE.NearestFilter,
    magFilter: THREE.NearestFilter,
    format: THREE.RGBAFormat,
    type: THREE.FloatType,
  })

  const dofPointsMaterial = useMemo(() => {
    const m = new DofPointsMaterial()
    m.uniforms.positions.value = target.texture
    m.uniforms.initialPositions.value = simulationMaterial.uniforms.positions.value
    return m
  }, [simulationMaterial, target.texture])

  const asciiTexture = useMemo(() => {
    if (!useAscii || !asciiChar) return null

    const canvas = document.createElement("canvas")
    const textureSize = 128
    const chars = asciiChar.split("")
    const charCount = chars.length

    const atlasSize = Math.ceil(Math.sqrt(charCount))
    const cellSize = textureSize / atlasSize

    canvas.width = textureSize
    canvas.height = textureSize
    const ctx = canvas.getContext("2d")
    if (!ctx) return null

    ctx.fillStyle = "black"
    ctx.fillRect(0, 0, textureSize, textureSize)

    ctx.translate(0, textureSize)
    ctx.scale(1, -1)

    ctx.fillStyle = "white"
    ctx.font = `bold ${cellSize * 0.7}px Arial`
    ctx.textAlign = "center"
    ctx.textBaseline = "middle"

    chars.forEach((char, index) => {
      const x = (index % atlasSize) * cellSize + cellSize / 2
      const y = Math.floor(index / atlasSize) * cellSize + cellSize / 2
      ctx.fillText(char, x, y)
    })

    const texture = new THREE.CanvasTexture(canvas)
    texture.needsUpdate = true
    return texture
  }, [asciiChar, useAscii])

  useMemo(() => {
    if (dofPointsMaterial) {
      dofPointsMaterial.uniforms.uAsciiTexture.value = asciiTexture
      dofPointsMaterial.uniforms.uUseAscii.value = useAscii ? 1.0 : 0.0
      dofPointsMaterial.uniforms.uCharCount.value = asciiChar ? asciiChar.length : 1
    }
  }, [asciiTexture, useAscii, dofPointsMaterial, asciiChar])

  const [scene] = useState(() => new THREE.Scene())
  const [camera] = useState(() => new THREE.OrthographicCamera(-1, 1, 1, -1, 1 / Math.pow(2, 53), 1))
  const [positions] = useState(() => new Float32Array([-1, -1, 0, 1, -1, 0, 1, 1, 0, -1, -1, 0, 1, 1, 0, -1, 1, 0]))
  const [uvs] = useState(() => new Float32Array([0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0]))

  const particles = useMemo(() => {
    const length = size * size
    const particles = new Float32Array(length * 3)
    for (let i = 0; i < length; i++) {
      const i3 = i * 3
      particles[i3 + 0] = (i % size) / size
      particles[i3 + 1] = i / size / size
    }
    return particles
  }, [size])

  useFrame((state, delta) => {
    if (!dofPointsMaterial || !simulationMaterial) return

    state.gl.setRenderTarget(target)
    state.gl.clear()
    state.gl.render(scene, camera)
    state.gl.setRenderTarget(null)

    const currentTime = useManualTime ? manualTime : state.clock.elapsedTime

    if (revealStartTime.current === null) {
      revealStartTime.current = currentTime
    }

    const revealElapsed = currentTime - revealStartTime.current
    const revealProgress = Math.min(revealElapsed / revealDuration, 1.0)
    const easedProgress = 1 - Math.pow(1 - revealProgress, 3)
    const revealFactor = easedProgress * 4.0

    if (revealProgress >= 1.0 && isRevealing) {
      setIsRevealing(false)
    }

    dofPointsMaterial.uniforms.uTime.value = currentTime
    dofPointsMaterial.uniforms.uFocus.value = focus
    dofPointsMaterial.uniforms.uBlur.value = blur

    easing.damp(dofPointsMaterial.uniforms.uTransition, "value", introspect ? 1.0 : 0.0, introspect ? 0.35 : 0.2, delta)

    simulationMaterial.uniforms.uTime.value = currentTime
    simulationMaterial.uniforms.uNoiseScale.value = noiseScale
    simulationMaterial.uniforms.uNoiseIntensity.value = noiseIntensity
    simulationMaterial.uniforms.uTimeScale.value = timeScale * speed

    dofPointsMaterial.uniforms.uPointSize.value = pointSize
    dofPointsMaterial.uniforms.uOpacity.value = opacity
    dofPointsMaterial.uniforms.uRevealFactor.value = revealFactor
    dofPointsMaterial.uniforms.uRevealProgress.value = easedProgress
    dofPointsMaterial.uniforms.uColorR.value = colorR
    dofPointsMaterial.uniforms.uColorG.value = colorG
    dofPointsMaterial.uniforms.uColorB.value = colorB
    dofPointsMaterial.uniforms.uSparkleSpeed.value = sparkleSpeed
    dofPointsMaterial.uniforms.uAsciiTexture.value = asciiTexture
    dofPointsMaterial.uniforms.uUseAscii.value = useAscii ? 1.0 : 0.0
    dofPointsMaterial.uniforms.uCharCount.value = asciiChar ? asciiChar.length : 1
  })

  return (
    <>
      {createPortal(
        <mesh material={simulationMaterial}>
          <bufferGeometry>
            <bufferAttribute attach="attributes-position" args={[positions, 3]} />
            <bufferAttribute attach="attributes-uv" args={[uvs, 2]} />
          </bufferGeometry>
        </mesh>,
        scene,
      )}
      <points material={dofPointsMaterial} {...props}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[particles, 3]} />
        </bufferGeometry>
      </points>
    </>
  )
}
