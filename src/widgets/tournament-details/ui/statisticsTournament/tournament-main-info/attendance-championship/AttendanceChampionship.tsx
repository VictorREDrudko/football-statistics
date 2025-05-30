import s from './AttendanceChampionship.module.scss'
import { Parameter } from '../parameter/Parameter'

type Props = {
  attendance: string
  attendancePerMatch: string
}

export const AttendanceChampionship = ({attendance, attendancePerMatch} : Props) => { 
  return(
    <div className={s.container}>
      <Parameter title={'Attendance:'}/>
      <span className={s.value}>{attendance}</span>
      <span className={s.prompt}>{`(${attendancePerMatch} per match)`}</span>
    </div>
  )
}
