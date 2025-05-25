import { forwardRef } from 'react';
import s from './Badge.module.scss';

type BadgeVariant = 'primary' | 'secondary' | 'danger' | 'outline'
type BadgeSize = 'small' | 'medium' | 'large';

type Props = {
  number: number;
  description?: string;
  variant?: BadgeVariant;
  size?: BadgeSize;
  className?: string;
};

export const Badge = forwardRef<HTMLDivElement, Props>(
  (
    {
      number,
      description = '',
      variant = 'primary',
      size = 'medium',
      className = '',
    },
    ref
  ) => {
    const variantClass = s[`variant--${variant}`];
    const sizeClass = s[`size--${size}`];
    const combiningClasses = `  ${s.wrapper}
                                ${variantClass}
                                ${sizeClass}
                                ${className}
                              `

    return (
      <div ref={ref} className={combiningClasses} >
        <span className={s.number}>{number}</span>
        <span className={s.description}>{description}</span>
      </div>
    );
  }
);