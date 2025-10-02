import { useState, useEffect, useCallback } from 'react'

interface UseInfiniteScrollOptions {
  threshold?: number
  rootMargin?: string
  isLoading?: boolean
}

interface UseInfiniteScrollReturn {
  visibleCount: number
  isLoading: boolean
  loadMore: () => void
  setVisibleCount: (count: number) => void
  setIsLoading: (loading: boolean) => void
}

export const useInfiniteScroll = (
  totalItems: number,
  itemsPerLoad: number = 2,
  options: UseInfiniteScrollOptions = {}
): UseInfiniteScrollReturn => {
  const { threshold = 0.1, rootMargin = '100px', isLoading = false } = options
  
  const [visibleCount, setVisibleCount] = useState(itemsPerLoad)
  const [isLoadingMore, setIsLoadingMore] = useState(false)

  // Calculate if there are more items to load
  const hasMoreItems = visibleCount < totalItems

  const loadMore = useCallback(() => {
    if (isLoadingMore || !hasMoreItems || isLoading) return
    
    setIsLoadingMore(true)
    
    // Simulate loading delay
    setTimeout(() => {
      setVisibleCount(prev => Math.min(prev + itemsPerLoad, totalItems))
      setIsLoadingMore(false)
    }, 500)
  }, [isLoadingMore, hasMoreItems, isLoading, itemsPerLoad, totalItems])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry.isIntersecting && hasMoreItems && !isLoadingMore && !isLoading) {
          loadMore()
        }
      },
      {
        threshold,
        rootMargin,
      }
    )

    // Create a sentinel element to observe
    const sentinel = document.getElementById('infinite-scroll-sentinel')
    if (sentinel) {
      observer.observe(sentinel)
    }

    return () => {
      if (sentinel) {
        observer.unobserve(sentinel)
      }
    }
  }, [hasMoreItems, isLoadingMore, isLoading, loadMore, threshold, rootMargin])

  return {
    visibleCount,
    isLoading: isLoadingMore,
    loadMore,
    setVisibleCount,
    setIsLoading: setIsLoadingMore
  }
}
