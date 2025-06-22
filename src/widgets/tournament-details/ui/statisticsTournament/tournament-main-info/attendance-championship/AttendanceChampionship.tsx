import s from './AttendanceChampionship.module.scss'
import { Parameter } from '../parameter/Parameter'
import { Container } from '@/shared'
import attendanceIcon from './../../../../../../shared/assets/iconStats/attendance.png'

type Props = {
  attendance: string
  attendancePerMatch: string
}

export const AttendanceChampionship = ({attendance, attendancePerMatch} : Props) => { 
  return(
    <div className={s.container}>
      <Parameter iconPath={attendanceIcon} title={'Attendance:'}/>
      <Container gap='2' align='center'>
        <span className={s.value}>{attendance}</span>
        <span className={s.prompt}>{`(${attendancePerMatch} per match)`}</span>
      </Container>

    </div>
  )
}
