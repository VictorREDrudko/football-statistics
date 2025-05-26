import s from './Flag.module.scss'
import { choiseCurrentFlag } from './lib/choiseCurrentFlag'

type Props = {
  countryName: string
  year: string
}

export const Flag = ({countryName, year}: Props) => {
  const srcFlag = choiseCurrentFlag({name: countryName, year});

  return (
    <img src={srcFlag} alt={`flag ${countryName}`} className={s.image}/>
  )
}