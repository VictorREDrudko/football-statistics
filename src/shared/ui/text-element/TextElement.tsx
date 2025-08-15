import React from 'react'
import { Text as RadixText } from '@radix-ui/themes'
import styles from './TextElement.module.scss'

type TextElement = 'p' | 'span' | 'label'
type TextSize = '1' | '2' | '3' | '4' | '5' | '6' | '7'
type TextWeight = 'light' | 'regular' | 'medium' | 'bold'
type TextColor = 'gray' | 'green' | 'red' | 'yellow' | 'ligth'
type TextAlign = 'left' | 'center' | 'right'

type TextProps = {
  as?: TextElement
  size?: TextSize
  weight?: TextWeight
  color?: TextColor
  align?: TextAlign
  truncate?: boolean
  className?: string
  children?: React.ReactNode
  style?: React.CSSProperties
}

export const TextElement = React.forwardRef<HTMLElement, TextProps>(
  (
    {
      as: Tag = 'p',
      size = '2',
      weight = 'regular',
      color = 'gray',
      align = 'left',
      truncate = false,
      className = '',
      children,
      ...props
    },
    ref
  ) => {
    const classes = [
      styles.text,
      styles[`text--${color}`],
      styles[`text--${weight}`],
      styles[`text--${align}`],
      truncate ? styles['text--truncate'] : '',
      className,
    ]
      .filter(Boolean)
      .join(' ')

    return (
      <RadixText asChild size={size} ref={ref} {...props}>
        <Tag className={classes}>{children}</Tag>
      </RadixText>
    )
  }
)

TextElement.displayName = 'Text'
