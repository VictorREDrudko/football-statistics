import { LinkProps, Link as LinkRouter } from 'react-router-dom';
import { ForwardedRef, forwardRef, ReactNode } from 'react';
import s from './link.module.scss';

type LinkVariant = 'primary' | 'secondary' | 'outline' | 'text';
type ButtonSize = 'small' | 'medium' | 'large';

type Props = LinkProps & {
  variant?: LinkVariant;
  size?: ButtonSize;
  disabled?: boolean;
  className?: string;
  children: ReactNode;
};

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
    ref: ForwardedRef<HTMLAnchorElement>
  ) => {
    const variantClass = s[`variant--${variant}`];
    const sizeClass = s[`size--${size}`];
    const disabledClasses = disabled ? s.disabled : '';
    const combiningClasses =` ${s.link} 
                              ${variantClass} 
                              ${sizeClass} 
                              ${disabledClasses} 
                              ${className} 
                            `

    return (
      <LinkRouter {...props} ref={ref} className={combiningClasses}>
        {children}
      </LinkRouter>
    );
  }
);