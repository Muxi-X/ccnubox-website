// src/components/ScrollSnapContainer.tsx
import { useEffect, useRef, useState, useCallback } from 'react'

interface ScrollSnapContainerProps {
  children: React.ReactNode
}

const ScrollSnapContainer = ({ children }: ScrollSnapContainerProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const [currentSection, setCurrentSection] = useState(0)
  const [isScrolling, setIsScrolling] = useState(false)
  const touchStartYRef = useRef(0)
  const touchStartTimeRef = useRef(0)
  const scrollTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const accumulatedDeltaRef = useRef(0)
  const sectionsCountRef = useRef(0) // 缓存 sections 数量

  // 滚动到指定 section
  const scrollToSection = useCallback((index: number) => {
    const content = contentRef.current
    if (!content) return

    setIsScrolling(true)

    // 使用 transform 实现平滑滚动
    const targetY = -index * window.innerHeight
    content.style.transition =
      'transform 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
    content.style.transform = `translateY(${targetY}px)`

    // 设置超时，滚动动画完成后重置状态
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current)
    }
    scrollTimeoutRef.current = setTimeout(() => {
      setIsScrolling(false)
    }, 700)
  }, [])

  // 监听 currentSection 变化，执行滚动
  useEffect(() => {
    scrollToSection(currentSection)
  }, [currentSection, scrollToSection])

  useEffect(() => {
    sectionsCountRef.current = contentRef.current?.children.length || 0
  }, [children])

  // 处理鼠标滚轮事件
  useEffect(() => {
    const container = containerRef.current
    const content = contentRef.current
    if (!container || !content) return

    let accumulatedDelta = accumulatedDeltaRef.current
    const threshold = 100 // 滚动阈值

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault()

      // 如果正在滚动，忽略新的滚动事件
      if (isScrolling) return

      // 累积滚动增量
      accumulatedDelta += e.deltaY
      accumulatedDeltaRef.current = accumulatedDelta

      // 清除之前的超时
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current)
      }

      // 设置新的超时，如果一段时间内没有新的滚动，重置累积值
      scrollTimeoutRef.current = setTimeout(() => {
        accumulatedDeltaRef.current = 0
      }, 150)

      // 检查是否达到阈值
      if (Math.abs(accumulatedDelta) >= threshold) {
        const direction = accumulatedDelta > 0 ? 1 : -1
        const newSection = Math.max(
          0,
          Math.min(sectionsCountRef.current - 1, currentSection + direction)
        )

        if (newSection !== currentSection) {
          setCurrentSection(newSection)
        }

        accumulatedDeltaRef.current = 0
      }
    }

    container.addEventListener('wheel', handleWheel, { passive: false })

    return () => {
      container.removeEventListener('wheel', handleWheel)
    }
  }, [currentSection, isScrolling])

  // 处理触摸事件
  useEffect(() => {
    const container = containerRef.current
    const content = contentRef.current
    if (!container || !content) return

    const minSwipeDistance = window.innerHeight * 0.15 // 最小滑动距离：屏幕高度的 15%
    const minSwipeVelocity = 0.3 // 最小滑动速度 (px/ms)

    const handleTouchStart = (e: TouchEvent) => {
      touchStartYRef.current = e.touches[0].clientY
      touchStartTimeRef.current = Date.now()
    }

    const handleTouchMove = (e: TouchEvent) => {
      // 阻止默认的滚动行为
      e.preventDefault()
    }

    const handleTouchEnd = (e: TouchEvent) => {
      // 如果正在滚动，忽略新的触摸事件
      if (isScrolling) return

      const touchEndY = e.changedTouches[0].clientY
      const touchEndTime = Date.now()

      const deltaY = touchStartYRef.current - touchEndY
      const deltaTime = touchEndTime - touchStartTimeRef.current
      const velocity = Math.abs(deltaY) / deltaTime

      // 判断是否满足滑动条件：距离或速度达到阈值
      const shouldSwipe =
        Math.abs(deltaY) >= minSwipeDistance || velocity >= minSwipeVelocity

      if (shouldSwipe) {
        const direction = deltaY > 0 ? 1 : -1 // 向上滑为正，向下滑为负
        const newSection = Math.max(
          0,
          Math.min(sectionsCountRef.current - 1, currentSection + direction)
        )

        if (newSection !== currentSection) {
          setCurrentSection(newSection)
        }
      }
    }

    // 使用 passive: false 以便调用 preventDefault
    container.addEventListener('touchstart', handleTouchStart, {
      passive: true,
    })
    container.addEventListener('touchmove', handleTouchMove, {
      passive: false,
    })
    container.addEventListener('touchend', handleTouchEnd, { passive: true })

    return () => {
      container.removeEventListener('touchstart', handleTouchStart)
      container.removeEventListener('touchmove', handleTouchMove)
      container.removeEventListener('touchend', handleTouchEnd)
    }
  }, [currentSection, isScrolling])

  // 清理定时器
  useEffect(() => {
    return () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current)
      }
    }
  }, [])

  return (
    <div ref={containerRef} className="h-screen overflow-hidden relative">
      <div ref={contentRef} className="will-change-transform">
        {children}
      </div>
    </div>
  )
}

export default ScrollSnapContainer
