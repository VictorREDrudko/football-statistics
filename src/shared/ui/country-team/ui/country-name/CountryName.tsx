import s from './CountryName.module.scss'

type Props = {
  countryName: string
}

export const CountryName = ({ countryName }: Props) => {
  return <span className={s.title}>{countryName}</span>
}
