import s from './Country.module.css'

import flagUruguay from './../../../image/flags/Uruguay50x30.png'
import flagFrance from './../../../image/flags/France50x30.png'
import flagMexico from './../../../image/flags/Mexico50x30.png'
import flagUSA from './../../../image/flags/USA50x30.png'
import flagBelgium from './../../../image/flags/Belgium50x30.png'
import flagArgentina from './../../../image/flags/Argentina50x30.png'
import flagBolivia from './../../../image/flags/Bolivia50x30.png'
import flagBrazil from './../../../image/flags/Brazil50x30.png'
import flagChile from './../../../image/flags/Chile50x30.png'
import flagParaguay from './../../../image/flags/Paraguay50x30.png'
import flagPeru from './../../../image/flags/Peru50x30.png'
import flagRomania from './../../../image/flags/Romania50x30.png'
import flagYugoslavia1 from './../../../image/flags/Yugoslavia150x30.png'
import flagYugoslavia2 from './../../../image/flags/Yugoslavia250x30.png'

type CountryProps = {
  name: string
  year: string
}

type NationFlagsType = {
  adopted: number
  flagImg: string
}

type FlagsType = {
  [key: string]: NationFlagsType[]
}

const flags: FlagsType = {
  ['Argentina']: [{adopted: 1861, flagImg: flagArgentina}],
  ['Belgium']: [{adopted: 1831, flagImg: flagBelgium}],
  ['Bolivia']: [{adopted: 1851, flagImg: flagBolivia}],
  ['Brazil']: [{adopted: 1889, flagImg: flagBrazil}],
  ['Chile']: [{adopted: 1817, flagImg: flagChile}],
  ['France']: [{adopted: 1794, flagImg: flagFrance}],
  ['Mexico']: [{adopted: 1916, flagImg: flagMexico}],
  ['Paraguay']: [{adopted: 1842, flagImg: flagParaguay}],
  ['Peru']: [{adopted: 1825, flagImg: flagPeru}],
  ['Romania']: [{adopted: 1834, flagImg: flagRomania}],
  ['United States']: [{adopted: 1775, flagImg: flagUSA}],
  ['Uruguay']: [{adopted: 1830, flagImg: flagUruguay}],
  ['Yugoslavia']: [{adopted: 1918, flagImg: flagYugoslavia1}, {adopted: 1946, flagImg: flagYugoslavia2}],
}

export const Country = (props: CountryProps) => {
  const mappedFlag = flags[props.name].filter((flag, index) => {
    return Number(props.year.slice(-4)) > flag.adopted
  })

  const srcImage = flags[props.name].length === 1 ? flags[props.name][0].flagImg : mappedFlag[0].flagImg

  return (
    <div className={s.container}>
      <img src={srcImage} alt="flag" className={s.img}/>
      <span className={s.title}>{props.name}</span>
    </div>
  )
}