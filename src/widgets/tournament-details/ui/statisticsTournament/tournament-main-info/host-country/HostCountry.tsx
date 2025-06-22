import { Container, Flag } from '@/shared'
import s from './HostCountry.module.scss'
import { Parameter } from '../parameter/Parameter'
import hostCountryIcon from './../../../../../../shared/assets/iconStats/host-country.png'

type Props = {
  countryNames: string[]
  year: string
}

export const HostCountry = ({countryNames, year} : Props) => {
  const mappedCountries = countryNames.map((countryName, index) => {
    return (
      <Container direction='row' align='center' gap='2' className={s.containerCountry} key={index}>
        <Flag countryName={countryName} year={year}/>
        <span className={s.value}>{countryName}</span>
      </Container>
    )
  })
  
  return(
    <div className={s.container}>
      <Parameter iconPath={hostCountryIcon} title={'Host countries:'}/>
      <Container direction='col' gap='2'>
        {mappedCountries}
      </Container>
    </div>
  )
}
