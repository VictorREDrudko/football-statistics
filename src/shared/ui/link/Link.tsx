import { Link as RadixLink } from '@radix-ui/themes'
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from 'react-router-dom'
import { forwardRef } from 'react'
import s from './link.module.scss'

type LinkVariant = 'primary' | 'secondary' | 'outline' | 'text' | 'primary-light'
type LinkSize = 'small' | 'medium' | 'large'

type Props = RouterLinkProps & {
  variant?: LinkVariant
  size?: LinkSize
  disabled?: boolean
  className?: string
  children: React.ReactNode
}

export const Link = forwardRef<HTMLAnchorElement, Props>(
  (
    {
      variant = 'primary',
      size = 'medium',
      disabled = false,
      className = '',
      children,
      ...props
    },
    ref
  ) => {
    const variantClass = s[`variant--${variant}`]
    const sizeClass = s[`size--${size}`]
    const disabledClass = disabled ? s.disabled : ''

    const combinedClasses = [
      s.link,
      variantClass,
      sizeClass,
      disabledClass,
      className,
    ]
      .filter(Boolean)
      .join(' ')

    return (
      <RadixLink asChild>
        <RouterLink
          ref={ref}
          className={combinedClasses}
          aria-disabled={disabled}
          {...props}>
          {children}
        </RouterLink>
      </RadixLink>
    )
  }
)

Link.displayName = 'Link'
