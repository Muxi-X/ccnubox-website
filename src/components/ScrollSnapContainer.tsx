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
  const [isBouncing, setIsBouncing] = useState(false)
  const touchStartYRef = useRef(0)
  const touchStartTimeRef = useRef(0)
  const scrollTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const bounceTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
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

  // 触发边界反弹效果
  const triggerBounce = useCallback(
    (direction: 'top' | 'bottom') => {
      const content = contentRef.current
      if (!content || isBouncing) return

      setIsBouncing(true)

      const currentY = -currentSection * window.innerHeight
      const bounceDistance = 120 // 反弹距离（像素），增加以显示更多背景文案
      const bounceOffset =
        direction === 'top' ? bounceDistance : -bounceDistance

      // 应用反弹效果
      content.style.transition =
        'transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
      content.style.transform = `translateY(${currentY + bounceOffset}px)`

      // 清除之前的反弹定时器
      if (bounceTimeoutRef.current) {
        clearTimeout(bounceTimeoutRef.current)
      }

      // 弹回原位
      bounceTimeoutRef.current = setTimeout(() => {
        content.style.transition =
          'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)'
        content.style.transform = `translateY(${currentY}px)`

        setTimeout(() => {
          setIsBouncing(false)
        }, 400)
      }, 300)
    },
    [currentSection, isBouncing]
  )

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

      // 如果正在滚动或反弹，忽略新的滚动事件
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
        const newSection = currentSection + direction

        // 检查是否在边界
        if (newSection < 0) {
          // 尝试向上滚动但已在顶部，触发反弹
          triggerBounce('top')
        } else if (newSection >= sectionsCountRef.current) {
          // 尝试向下滚动但已在底部，触发反弹
          triggerBounce('bottom')
        } else {
          // 正常滚动
          setCurrentSection(newSection)
        }

        accumulatedDeltaRef.current = 0
      }
    }

    container.addEventListener('wheel', handleWheel, { passive: false })

    return () => {
      container.removeEventListener('wheel', handleWheel)
    }
  }, [currentSection, isScrolling, triggerBounce])

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
        const newSection = currentSection + direction

        // 检查是否在边界
        if (newSection < 0) {
          // 尝试向上滑动但已在顶部，触发反弹
          triggerBounce('top')
        } else if (newSection >= sectionsCountRef.current) {
          // 尝试向下滑动但已在底部，触发反弹
          triggerBounce('bottom')
        } else {
          // 正常滚动
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
  }, [currentSection, isScrolling, triggerBounce])

  // 清理定时器
  useEffect(() => {
    return () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current)
      }
      if (bounceTimeoutRef.current) {
        clearTimeout(bounceTimeoutRef.current)
      }
    }
  }, [])

  return (
    <div ref={containerRef} className="h-screen overflow-hidden relative">
      <div ref={contentRef} className="will-change-transform relative z-10">
        {/* 顶部文案背景 - 在第一个section之前 */}
        <div
          className="absolute left-0 right-0 flex items-center justify-center pointer-events-none"
          style={{ top: '-100px', height: '100px' }}
        >
          <div className="text-3xl md:text-5xl font-bold text-gray-400">
            学霸没有上限
          </div>
        </div>

        {children}

        {/* 底部文案背景 - 在最后一个section之后 */}
        <div
          className="absolute left-0 right-0 flex items-center justify-center pointer-events-none"
          style={{ bottom: '-100px', height: '100px' }}
        >
          <div className="text-3xl md:text-5xl font-bold text-gray-400">
            学霸也有底线
          </div>
        </div>
      </div>
    </div>
  )
}

export default ScrollSnapContainer
