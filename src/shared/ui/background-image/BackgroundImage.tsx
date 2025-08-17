import s from './BackgroundImage.module.scss';

type Props = {
  imagePath: string;
  alt: string;
  className?: string
}

export const BackgroundImage = ({ imagePath, alt, className = '' }: Props) => {
  const combineClass = `${s.container} ${className}`
  return (
    <div className={combineClass}>
      <img className={s.image} src={imagePath} alt={alt} />
    </div>
  );
}