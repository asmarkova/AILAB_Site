import { Effects } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Particles } from "./Particles"
import { VignetteShader } from "./shaders/vignetteShader"
import './background.css'

export const ParticlesBackground = () => {
  const config = {
    speed: 0.42,
    pointSize: 2.6,
    noiseScale: 0.5,
    noiseIntensity: 1.18,
    opacity: 0.6,
    colorR: 0.57,
    colorG: 0,
    colorB: 1,
    particleCount: 256, // Reduced from 512 for better performance
    sparkleSpeed: 0.9,
    blur: 31,
    asciiChar: "011",
    useAscii: true
  }

  return (
    <div className="particles-background">
      <Canvas
        camera={{
          position: [1.2629783123314589, 2.664606471394044, -1.8178993743288914],
          fov: 50,
          near: 0.01,
          far: 300,
        }}
        dpr={[1, 1.5]} // Limit pixel ratio for performance
        performance={{ min: 0.5 }} // Allow frame rate to drop if needed
        frameloop="demand" // Only render when needed
      >
        <color attach="background" args={["#000"]} />
        <Particles
          speed={config.speed}
          aperture={1.79}
          focus={3.8}
          size={config.particleCount}
          noiseScale={config.noiseScale}
          noiseIntensity={config.noiseIntensity}
          timeScale={1}
          pointSize={config.pointSize}
          opacity={config.opacity}
          planeScale={10.0}
          useManualTime={false}
          manualTime={0}
          introspect={false}
          colorR={config.colorR}
          colorG={config.colorG}
          colorB={config.colorB}
          sparkleSpeed={config.sparkleSpeed}
          blur={config.blur}
          asciiChar={config.asciiChar}
          useAscii={config.useAscii}
        />
        <Effects multisamping={0} disableGamma>
          <shaderPass args={[VignetteShader]} uniforms-darkness-value={1.5} uniforms-offset-value={0.4} />
        </Effects>
      </Canvas>
    </div>
  )
}
