import s from './Flag.module.scss'

type Props = {
  countryName: string
  flagSrc: string
  isCountryReal: boolean
}

export const Flag = ({ flagSrc, isCountryReal, countryName }: Props) => {
  const combineClass = isCountryReal ? `${s.flag}` : `${s.flagNoReal}`

  return (
    <img src={flagSrc} alt={`flag ${countryName}`} className={combineClass} />
  )
}
