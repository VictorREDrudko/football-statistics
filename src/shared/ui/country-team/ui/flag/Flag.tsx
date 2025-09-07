import s from './Flag.module.scss'

type Props = {
  countryName: string
  flagSrc: string
}

export const Flag = ({ flagSrc, countryName }: Props) => {
  return <img src={flagSrc} alt={`flag ${countryName}`} className={s.flag} />
}
