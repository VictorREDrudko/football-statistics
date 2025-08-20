import s from './ChampionshipAttendance.module.scss'
import { Container } from '@/shared'

type Props = {
  attendance: string
  attendancePerMatch: string
}

export const ChampionshipAttendance = ({
  attendance,
  attendancePerMatch,
}: Props) => {
  return (
    <Container gap="2" align="center" className={s.container}>
      <span className={s.attendance}>{attendance}</span>
      <span
        className={s.valuePerMatch}>{`(${attendancePerMatch} per match)`}</span>
    </Container>
  )
}
