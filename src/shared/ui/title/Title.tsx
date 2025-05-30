import s from './Title.module.scss'

type TitleVariant = 'stage' | 'sub-stage'

type Props = {
  title: string
  variant?: TitleVariant;
}

export const Title = ({title, variant = "stage"}: Props) => {
  const variantClass = s[`variant--${variant}`];

  return <h2 className={`${s.title} ${variantClass}`}>{title}</h2>
}