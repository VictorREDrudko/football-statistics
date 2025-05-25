import { forwardRef } from 'react';
import { type ComponentPropsWithoutRef } from 'react';
import s from './Container.module.scss';

type FlexDirection = 'row' | 'col' | 'row-reverse' | 'col-reverse';
type FlexJustify = 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly';
type FlexAlign = 'start' | 'end' | 'center' | 'baseline' | 'stretch';
type FlexWrap = 'nowrap' | 'wrap' | 'wrap-reverse';

type FlexContainerProps = ComponentPropsWithoutRef<'div'> & {
  direction?: FlexDirection;
  justify?: FlexJustify;
  align?: FlexAlign;
  wrap?: FlexWrap;
  gap?: string;
  className?: string;
};

export const Container = forwardRef<HTMLDivElement, FlexContainerProps>(
  (
    {
      direction = 'row',
      justify = 'start',
      align = 'stretch',
      wrap = 'nowrap',
      gap = '',
      className = '',
      children,
      ...props
    },
    ref
  ) => {
    const directionClass = s[`direction-${direction}`];
    const justifyClass = s[`justify-${justify}`];
    const alignClass = s[`align-${align}`];
    const wrapClass = s[`wrap-${wrap}`];
    const gapClass = gap ? s[`gap-${gap}`] : '';

    const combiningClasses = `  ${s.container}
                                ${directionClass}
                                ${justifyClass}
                                ${alignClass}
                                ${wrapClass}
                                ${gapClass}
                                ${className}
                            `

    return (
      <div ref={ref} className={combiningClasses} {...props}>
        {children}
      </div>
    );
  }
);