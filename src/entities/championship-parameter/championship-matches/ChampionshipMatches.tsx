import s from './ChampionshipMatches.module.scss'

type Props = {
  matches: number
}

export const ChampionshipMatches = ({ matches }: Props) => {
  return (
    <div className={s.container}>
      <span className={s.matches}>{matches}</span>
    </div>
  )
}
