import React from 'react'
import { Box } from '@radix-ui/themes'
import s from './BackgroundWrapper.module.scss'

interface BackgroundWrapperProps {
  imageUrl: string
  children: React.ReactNode
  className?: string
  overlayColor?: string
  backgroundSize?: 'cover' | 'contain' | 'auto'
  backgroundPosition?: string
  minHeight?: string
}

export const BackgroundWrapper = ({
  imageUrl,
  children,
  className = '',
  overlayColor = 'rgba(0, 0, 0, 0.3)',
  backgroundSize = 'cover',
  backgroundPosition = 'center',
  minHeight = '100vh',
}: BackgroundWrapperProps) => {
  return (
    <Box
      className={`${s.backgroundWrapper} ${className}`}
      style={
        {
          '--bg-image': `url(${imageUrl})`,
          '--overlay-color': overlayColor,
          '--bg-size': backgroundSize,
          '--bg-position': backgroundPosition,
          '--min-height': minHeight,
        } as React.CSSProperties
      }>
      <div className={s.content}>{children}</div>
    </Box>
  )
}
