import { useEffect, useState } from "react"
import { MeshGradient } from "@paper-design/shaders-react"

export function MeshGradientAcademy({ speed = 0.5, colors }) {
  const [mounted, setMounted] = useState(false)
  const [dimensions, setDimensions] = useState({ width: 1920, height: 1080 })

  useEffect(() => {
    setMounted(true)

    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    updateDimensions()
    window.addEventListener('resize', updateDimensions)

    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  if (!mounted) return null

  return (
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      opacity: 0.7,
      filter: 'blur(12px)',
      zIndex: 0
    }}>
      <MeshGradient
        colors={colors}
        speed={speed}
        distortion={0.8}
        swirl={0.5}
        grainMixer={0.3}
        grainOverlay={0.2}
        style={{
          width: '100%',
          height: '100%'
        }}
      />
    </div>
  )
}
