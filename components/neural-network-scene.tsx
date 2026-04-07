"use client"

import { useEffect, useRef, useMemo } from "react"

interface Particle {
  x: number
  y: number
  z: number
  vx: number
  vy: number
  size: number
  opacity: number
}

interface Connection {
  from: number
  to: number
  opacity: number
}

export default function NeuralNetworkScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>(0)
  const mouseRef = useRef({ x: 0, y: 0 })

  const particles = useMemo(() => {
    const arr: Particle[] = []
    for (let i = 0; i < 120; i++) {
      arr.push({
        x: Math.random() * 2000 - 1000,
        y: Math.random() * 2000 - 1000,
        z: Math.random() * 1000,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.3,
      })
    }
    return arr
  }, [])

  const connections = useMemo(() => {
    const conns: Connection[] = []
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        if (Math.random() > 0.97) {
          conns.push({ from: i, to: j, opacity: Math.random() * 0.3 + 0.1 })
        }
      }
    }
    return conns
  }, [particles])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    window.addEventListener("mousemove", handleMouseMove)

    let time = 0

    const animate = () => {
      time += 0.01
      ctx.fillStyle = "rgba(3, 7, 18, 0.15)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      const centerX = canvas.width / 2
      const centerY = canvas.height / 2
      const mouseOffsetX = mouseRef.current.x * 50
      const mouseOffsetY = mouseRef.current.y * 50

      // Update and draw particles
      particles.forEach((p, i) => {
        // Update position with subtle movement
        p.x += p.vx + Math.sin(time + i * 0.1) * 0.2
        p.y += p.vy + Math.cos(time + i * 0.1) * 0.2

        // Wrap around edges
        if (p.x < -1000) p.x = 1000
        if (p.x > 1000) p.x = -1000
        if (p.y < -1000) p.y = 1000
        if (p.y > 1000) p.y = -1000

        // 3D perspective projection
        const scale = 1000 / (1000 + p.z)
        const screenX = centerX + (p.x + mouseOffsetX) * scale
        const screenY = centerY + (p.y + mouseOffsetY) * scale

        // Draw particle glow
        const gradient = ctx.createRadialGradient(
          screenX,
          screenY,
          0,
          screenX,
          screenY,
          p.size * scale * 8
        )
        gradient.addColorStop(0, `rgba(0, 212, 170, ${p.opacity * scale})`)
        gradient.addColorStop(0.5, `rgba(0, 212, 170, ${p.opacity * scale * 0.3})`)
        gradient.addColorStop(1, "rgba(0, 212, 170, 0)")

        ctx.beginPath()
        ctx.arc(screenX, screenY, p.size * scale * 8, 0, Math.PI * 2)
        ctx.fillStyle = gradient
        ctx.fill()

        // Draw particle core
        ctx.beginPath()
        ctx.arc(screenX, screenY, p.size * scale, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0, 255, 210, ${p.opacity})`
        ctx.fill()
      })

      // Draw connections
      connections.forEach((conn) => {
        const p1 = particles[conn.from]
        const p2 = particles[conn.to]

        const scale1 = 1000 / (1000 + p1.z)
        const scale2 = 1000 / (1000 + p2.z)

        const x1 = centerX + (p1.x + mouseOffsetX) * scale1
        const y1 = centerY + (p1.y + mouseOffsetY) * scale1
        const x2 = centerX + (p2.x + mouseOffsetX) * scale2
        const y2 = centerY + (p2.y + mouseOffsetY) * scale2

        const dist = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)
        if (dist < 200) {
          const lineOpacity = conn.opacity * (1 - dist / 200) * Math.min(scale1, scale2)
          ctx.beginPath()
          ctx.moveTo(x1, y1)
          ctx.lineTo(x2, y2)
          ctx.strokeStyle = `rgba(0, 212, 170, ${lineOpacity})`
          ctx.lineWidth = 0.5
          ctx.stroke()
        }
      })

      // Draw floating brain-like central sphere
      const brainPulse = Math.sin(time * 2) * 0.1 + 1
      const brainRadius = 80 * brainPulse

      // Outer glow
      const brainGlow = ctx.createRadialGradient(
        centerX + mouseOffsetX * 0.3,
        centerY + mouseOffsetY * 0.3,
        0,
        centerX + mouseOffsetX * 0.3,
        centerY + mouseOffsetY * 0.3,
        brainRadius * 3
      )
      brainGlow.addColorStop(0, "rgba(0, 212, 170, 0.3)")
      brainGlow.addColorStop(0.5, "rgba(0, 212, 170, 0.1)")
      brainGlow.addColorStop(1, "rgba(0, 212, 170, 0)")

      ctx.beginPath()
      ctx.arc(
        centerX + mouseOffsetX * 0.3,
        centerY + mouseOffsetY * 0.3,
        brainRadius * 3,
        0,
        Math.PI * 2
      )
      ctx.fillStyle = brainGlow
      ctx.fill()

      // Inner sphere with distortion effect
      for (let ring = 0; ring < 8; ring++) {
        const ringRadius = brainRadius * (0.4 + ring * 0.1)
        const segments = 24
        ctx.beginPath()
        for (let i = 0; i <= segments; i++) {
          const angle = (i / segments) * Math.PI * 2
          const distort = Math.sin(angle * 3 + time * 3) * 5 + Math.cos(angle * 5 + time * 2) * 3
          const x = centerX + mouseOffsetX * 0.3 + Math.cos(angle) * (ringRadius + distort)
          const y = centerY + mouseOffsetY * 0.3 + Math.sin(angle) * (ringRadius + distort)
          if (i === 0) ctx.moveTo(x, y)
          else ctx.lineTo(x, y)
        }
        ctx.closePath()
        ctx.strokeStyle = `rgba(0, 212, 170, ${0.3 - ring * 0.03})`
        ctx.lineWidth = 1.5
        ctx.stroke()
      }

      // Draw stars in background
      for (let i = 0; i < 50; i++) {
        const starX = ((i * 137.5 + time * 10) % canvas.width)
        const starY = ((i * 89.3) % canvas.height)
        const starOpacity = Math.sin(time * 2 + i) * 0.3 + 0.4
        ctx.beginPath()
        ctx.arc(starX, starY, 0.5, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${starOpacity})`
        ctx.fill()
      }

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("mousemove", handleMouseMove)
      cancelAnimationFrame(animationRef.current)
    }
  }, [particles, connections])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full -z-10"
      style={{ background: "linear-gradient(to bottom, #030712, #0a0f1a, #030712)" }}
    />
  )
}
