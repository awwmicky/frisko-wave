import confetti from 'canvas-confetti'

const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min
const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 }
const [ duration, TIMER ] = [ (5 * 1000), 250 ]

export const runFireworks = () => {
  const animationEnd = Date.now() + duration
	const yAxis = Math.random() - 0.2

  const interval: ReturnType<typeof setInterval> = setInterval(() => {
    const timeLeft = animationEnd - Date.now()

    if (timeLeft <= 0) return clearInterval(interval)

    const particleCount = 50 * (timeLeft / duration)
    // adjust confetti start point
    confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: yAxis } }))
    confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: yAxis } }))
  }, TIMER)
}
