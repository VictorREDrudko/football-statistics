
import { getInternationalFootballData } from '../lib/getInternationalFootballData'
import { getContinentalFootballData } from '../lib/getContinentalFootballData'
import s from './Tournaments.module.scss'
import { OrganizationFootballLevel } from '@/entities/organization-football-level/ui/OrganizationFootballLevel'
import { OrganizationData } from '@/shared/model/football-structure/types'
import { HeaderDashboard } from '@/shared/ui/header-dashboard/HeaderDashboard'

export const Tournaments = () => {
  // Football level data
  const internationalData: OrganizationData[] = getInternationalFootballData()
  const continentalData: OrganizationData[] = getContinentalFootballData()

  const generalLevelData: OrganizationData[] = [
    ...internationalData,
    ...continentalData,
  ]

  // Get anchor links
  const anchorLinks = generalLevelData.map((data, index) => {
    return (
      <a key={index} href={`#${data.governingBodies.code}`} className={s.link}>
        {data.governingBodies.code}
      </a>
    )
  })

  return (
    <div className={s.container}>
      <HeaderDashboard>
        <div className={s.containerAnchor}>{anchorLinks}</div>
      </HeaderDashboard>
      <OrganizationFootballLevel
        title={'International Level Football'}
        data={internationalData}
      />
      <OrganizationFootballLevel
        title={'Continental Level Football'}
        data={continentalData}
      />
    </div>
  )
}
