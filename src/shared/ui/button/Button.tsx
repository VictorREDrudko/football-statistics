import { Button as HeadlessButton } from '@headlessui/react';
import { ForwardedRef, forwardRef } from 'react';
import styles from './Button.module.scss';

type variant = 'primary' | 'secondary' | 'danger' | 'outline' | 'text';
type size = 'small' | 'medium' | 'large';

interface ButtonProps {
  variant?: variant;
  size?: size;
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  children: React.ReactNode;
  [key: string]: any; // For other props
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'medium',
      disabled = false,
      loading = false,
      className = '',
      children,
      ...props
    },
    ref: ForwardedRef<HTMLButtonElement>
  ) => {
    const variantClass = styles[`variant--${variant}`];
    const sizeClass = styles[`size--${size}`];
    const stateClasses = [
      disabled ? styles.disabled : '',
      loading ? styles.loading : ''
    ].join(' ');

    return (
      <HeadlessButton
        {...props}
        ref={ref}
        disabled={disabled || loading}
        className={`
          ${styles.button} 
          ${variantClass} 
          ${sizeClass} 
          ${stateClasses} 
          ${className}
        `}
        data-hover={styles['data-hover']}
        data-active={styles['data-active']}
      >
        {loading && <span className={styles.spinner} aria-hidden="true" />}
        <span className={styles.content}>{children}</span>
      </HeadlessButton>
    );
  }
);