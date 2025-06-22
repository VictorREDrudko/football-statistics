import s from './TeamsChampionship.module.scss'
import { Parameter } from '../parameter/Parameter'
import { Container } from '@/shared'
import teamsIcon from './../../../../../../shared/assets/iconStats/teams.png'

type Props = {
  teamsFinalStage: number
  teamsQualification: number
}

export const TeamsChampionship = ({teamsFinalStage, teamsQualification} : Props) => { 
  return(
    <div className={s.container}>
      <Parameter iconPath={teamsIcon} title={'Teams:'}/>
      <Container gap='2' direction='col'>
        <Container gap='2' align='center'>
          <span className={s.value}>{teamsFinalStage}</span>
          <span className={s.prompt}>{`(${teamsQualification} qualification)`}</span>
        </Container>
      </Container>
    </div>
  )
}
