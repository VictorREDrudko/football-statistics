import s from './TeamRating.module.css'

type Props = {
  value: number
}

export const TeamRating = ({value}: Props) => {
  return (
    <div className={s.container}>
      <div className={s.rating}>
        <span className={s.value}>{value}</span>
      </div>
      <span className={s.title}>Rating</span>
    </div>
  )
}