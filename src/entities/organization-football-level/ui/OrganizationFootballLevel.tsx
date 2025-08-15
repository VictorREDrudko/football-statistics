import { BackgroundWrapper, Heading } from '@/shared'
import { OrganizationData } from '@/shared/model'
import { TournamentLevel } from './tournaments-level/TournamentLevel'
import BackgroundImage from '../assets/background-world.png'
import s from './OrganizationFootballLevel.module.scss'

type Props = {
  title: string
  data: OrganizationData[]
}

export const OrganizationFootballLevel = ({ title, data }: Props) => {
  const organizationsData = data.map((organizationData, index) => {
    return (
      <TournamentLevel
        organizationData={organizationData}
        key={index}
        id={`${organizationData.governingBodies.code}`}
      />
    )
  })

  return (
    <BackgroundWrapper imageUrl={BackgroundImage} className={s.container}>
      <Heading size="8" align="center" color="gray" className={s.title}>
        {title}
      </Heading>
      <div className={s.containerLevel}>{organizationsData}</div>
    </BackgroundWrapper>
  )
}
