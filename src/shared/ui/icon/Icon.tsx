import { ForwardedRef, forwardRef, ImgHTMLAttributes, SVGProps } from 'react'
import s from './Icon.module.scss'

type IconProps = {
  /** Путь к иконке (svg/png) или React-компонент SVG */
  src: string | React.FC<SVGProps<SVGSVGElement>>
  /** Размер иконки (число в px или строка) */
  size?: number | string
  /** Альтернативный текст */
  alt?: string
  /** Дополнительные классы */
  className?: string
  /** Цвет для SVG иконок */
  color?: string
} & (ImgHTMLAttributes<HTMLImageElement> | SVGProps<SVGSVGElement>)

export const Icon = forwardRef<HTMLImageElement | SVGSVGElement, IconProps>(
  ({ src, size = 24, alt = '', className = '', color, ...props }, ref) => {
    const isSvgComponent = typeof src !== 'string'
    const isSvgFile = typeof src === 'string' && src.endsWith('.svg')

    const style = {
      width: typeof size === 'number' ? `${size}px` : size,
      height: typeof size === 'number' ? `${size}px` : size,
      ...(color && !isSvgFile ? { color } : {}),
    }

    if (isSvgComponent) {
      const SvgIcon = src as React.FC<SVGProps<SVGSVGElement>>
      return (
        <div className={`${s.wrapper} ${className}`} style={style}>
          <SvgIcon
            ref={ref as ForwardedRef<SVGSVGElement>}
            className={s.icon}
            width="100%"
            height="100%"
            color={color}
            {...(props as SVGProps<SVGSVGElement>)}
          />
        </div>
      )
    }

    if (isSvgFile) {
      return (
        <div className={`${s.wrapper} ${className}`} style={style}>
          <img
            ref={ref as ForwardedRef<HTMLImageElement>}
            src={src}
            alt={alt}
            className={s.icon}
            {...(props as ImgHTMLAttributes<HTMLImageElement>)}
          />
        </div>
      )
    }

    // PNG/JPG изображение
    return (
      <span className={`${s.wrapper} ${className}`} style={style}>
        <img
          ref={ref as ForwardedRef<HTMLImageElement>}
          src={src}
          alt={alt}
          className={s.image}
          {...(props as ImgHTMLAttributes<HTMLImageElement>)}
        />
      </span>
    )
  }
)
