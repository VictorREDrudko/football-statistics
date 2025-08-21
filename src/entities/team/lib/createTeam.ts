import { Team } from '@/entities/team'
import { CreateTeamOptions } from '@/entities/team/model/types'
import { getTeamAssets } from '@/shared/assets/lib'

export const createTeam = (options: CreateTeamOptions): Team => {
  const { flag, coatOfArms, icon } = getTeamAssets(options.country)

  const {
    confederation,
    founded,
    fifa,
    confederationDate,
    flagsPeriod,
    names,
  } = options

  const isStringFlag = typeof flag === 'string' && flagsPeriod.length === 1

  const flags = isStringFlag
    ? [{ flagPath: flag, period: flagsPeriod[0] }]
    : flagsPeriod.map((period, index) => {
        return { flagPath: flag[index], period: period }
      })

  return new Team({
    confederation,
    names,
    flags,
    coatOfArms,
    associationIcon: icon,
    teamDates: {
      founded,
      fifa,
      confederationDate,
    },
  })
}
