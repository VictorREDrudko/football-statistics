import s from './BackgroundImage.module.scss';

type Props = {
  imagePath: string;
  alt: string;
}

export const BackgroundImage = ({ imagePath, alt }: Props) => {
  return (
    <div className={s.container}>
      <img className={s.image} src={imagePath} alt={alt} />
    </div>
  );
}