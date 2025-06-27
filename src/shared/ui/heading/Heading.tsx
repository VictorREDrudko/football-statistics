import { Theme } from '@radix-ui/themes';
import { ReactNode } from 'react';
import styles from './Heading.module.scss'; // Импорт SCSS-модуля

type HeadingProps = {
  children: ReactNode;
  align?: 'left' | 'center' | 'right';
  color?: 'primary' | 'secondary' | 'accent' | 'gray' | 'contrast';
  size?: '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';
  weight?: 'light' | 'regular' | 'medium' | 'bold';
  gradient?: boolean;
  gradientColors?: [string, string];
  className?: string;
};

export const Heading = ({
  children,
  align = 'left',
  color = 'primary',
  size = '6',
  weight = 'bold',
  gradient = false,
  gradientColors = ['#FFDC00', '#93c926'],
  className = '',
}: HeadingProps) => {
  // Если используете SCSS-модули, классы берутся из styles
  const textAlign = styles[`align-${align}`];
  const textColor = styles[`color-${color}`];
  const textSize = styles[`size-${size}`]; // Размер теперь из SCSS
  const textWeight = styles[`weight-${weight}`];

  const gradientStyle = gradient
    ? {
        backgroundImage: `linear-gradient(to right, ${gradientColors[0]}, ${gradientColors[1]})`,
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        color: 'transparent',
      }
    : {};

  return (
    <Theme>
      <h1
        className={`${styles.heading} ${textAlign} ${textColor} ${textSize} ${textWeight} ${className}`}
        style={gradientStyle}
      >
        {children}
      </h1>
    </Theme>
  );
};