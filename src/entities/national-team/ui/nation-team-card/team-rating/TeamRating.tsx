import s from './TeamRating.module.css'

type Props = {
  place: number
  points: number
}

export const TeamRating = ({place, points}: Props) => {
  return (
    <div className={s.container}>
      <div className={s.rating}>
        <span className={s.value}>{place}</span>
      </div>
      <span className={s.title}>Rating</span>
      <span className={s.points}>{points}</span>
    </div>
  )
}