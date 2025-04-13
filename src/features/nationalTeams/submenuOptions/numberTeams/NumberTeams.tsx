import s from './NumberTeams.module.css'

type Props = {
  numberTeams: number
}

export const NumberTeams = ({numberTeams}: Props) => {
  return (
    <div className={s.container}>
      <span className={s.number}>
        {numberTeams}
      </span>
      <span className={s.title}>Teams</span>
    </div>
  )
}