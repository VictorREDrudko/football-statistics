import s from './IconNationalCup.module.scss'

type Props = {
  iconCupPath: string
  tournamentName: string
}

export const IconNationalCup = ({iconCupPath, tournamentName}: Props) => {
  return (
    <div className={s.container}>
      <img className={s.image} src={iconCupPath} alt={tournamentName} />
      <span className={s.title}>{tournamentName}</span>
    </div>
  )
}