// src/components/ScrollSnapContainer.tsx
import { useEffect, useRef, useState } from 'react'

interface ScrollSnapContainerProps {
  children: React.ReactNode
}

const ScrollSnapContainer = ({ children }: ScrollSnapContainerProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [currentSection, setCurrentSection] = useState(0)
  const [isScrolling, setIsScrolling] = useState(false)
  const scrollTimeoutRef = useRef<ReturnType<typeof setTimeout>>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const sections = container.children.length
    let accumulatedDelta = 0
    const threshold = 100 // 滚动阈值，累积到这个值才切换section

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault()

      // 如果正在滚动动画中，忽略新的滚动事件
      if (isScrolling) return

      // 累积滚动增量
      accumulatedDelta += e.deltaY

      // 清除之前的超时
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current)
      }

      // 设置新的超时，如果一段时间内没有新的滚动，重置累积值
      scrollTimeoutRef.current = setTimeout(() => {
        accumulatedDelta = 0
      }, 150)

      // 检查是否达到阈值
      if (Math.abs(accumulatedDelta) >= threshold) {
        const direction = accumulatedDelta > 0 ? 1 : -1
        const newSection = Math.max(
          0,
          Math.min(sections - 1, currentSection + direction)
        )

        if (newSection !== currentSection) {
          setIsScrolling(true)
          setCurrentSection(newSection)

          // 滚动到目标section
          const targetSection = container.children[newSection] as HTMLElement
          targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' })

          // 滚动动画完成后重置状态
          setTimeout(() => {
            setIsScrolling(false)
            accumulatedDelta = 0
          }, 1000) // 1秒的阻尼时间
        }

        accumulatedDelta = 0
      }
    }

    const handleTouchStart = (e: TouchEvent) => {
      const touch = e.touches[0]
      containerRef.current?.setAttribute(
        'data-touch-start-y',
        touch.clientY.toString()
      )
    }

    const handleTouchEnd = (e: TouchEvent) => {
      if (isScrolling) return

      const touch = e.changedTouches[0]
      const startY = parseFloat(
        containerRef.current?.getAttribute('data-touch-start-y') || '0'
      )
      const deltaY = startY - touch.clientY
      const threshold = 50

      if (Math.abs(deltaY) >= threshold) {
        const direction = deltaY > 0 ? 1 : -1
        const newSection = Math.max(
          0,
          Math.min(sections - 1, currentSection + direction)
        )

        if (newSection !== currentSection) {
          setIsScrolling(true)
          setCurrentSection(newSection)

          const targetSection = container.children[newSection] as HTMLElement
          targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' })

          setTimeout(() => {
            setIsScrolling(false)
          }, 1000)
        }
      }
    }

    // 添加事件监听器
    container.addEventListener('wheel', handleWheel, { passive: false })
    container.addEventListener('touchstart', handleTouchStart, {
      passive: true,
    })
    container.addEventListener('touchend', handleTouchEnd, { passive: true })

    return () => {
      container.removeEventListener('wheel', handleWheel)
      container.removeEventListener('touchstart', handleTouchStart)
      container.removeEventListener('touchend', handleTouchEnd)
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current)
      }
    }
  }, [currentSection, isScrolling])

  return (
    <div
      ref={containerRef}
      className="h-screen overflow-y-auto overflow-x-hidden"
      style={{
        scrollBehavior: 'smooth',
      }}
    >
      {children}
    </div>
  )
}

export default ScrollSnapContainer
