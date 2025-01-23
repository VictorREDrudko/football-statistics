import s from './TrophyRow.module.css'

type Props = {
  title: string
  icon: string
  value: number
  years: number[]
}

export const TrophyRow = ({title, icon, value, years}: Props) => {
  const mappedYears = years.map(el => {
    return <span className={s.year}>{`${el} `}</span>
  })

  return (
    // <div className={s.container}>
    //   <div className={s.containerTitle}>
    //     {/* <img className={s.icon} src={icon} alt="icon trophy" /> */}
    //     <span className={s.title}>{title}</span>
    //   </div>
      
    //   <span className={s.value}>{value}</span>
    //   <div className={s.containerYears}>{mappedYears}</div>
    // </div>

    <div className={s.container}>
      <span className={s.title}>{title}</span>
      <div className={s.containerTitle}>
        <span className={s.value}>{value}</span>
        <img className={s.icon} src={icon} alt="icon trophy" />
      </div>
      <div className={s.block}>
        {mappedYears}
      </div>
    </div>
  )
}