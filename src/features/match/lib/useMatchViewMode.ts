import { MatchViewMode } from '@/entities/match/model'
import { useState } from 'react'

export const useMatchViewMode = (): MatchViewMode => {
  const [isCompactView, setIsCompactView] = useState(true)

  // переключатель режимов
  const toggleViewMode = () => {
    setIsCompactView((prev) => !prev)
  }

  // функции для явной установки режима
  const setCompactView = () => setIsCompactView(true)
  const setDetailedView = () => setIsCompactView(false)

  return {
    isCompactView,
    toggleViewMode,
    setCompactView,
    setDetailedView,
  }
}
