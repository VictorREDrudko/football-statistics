import { MatchFifaWorldCup } from 'data/type-data'
import { Group } from './group/Group'
import s from './Groups.module.css'
import { MatchesInGroup } from './mathes-in-group/MatchesInGroup'
import { addDataTeamInGroup, getInitialDataTeam, getMatchesInGroup, getUniqueTeamsInGroup, sortTeamsInGroup, uniqueTitleGroups } from 'data/worldCupFinalStage'

type Groups = {
  matchesInGroup: MatchFifaWorldCup[] | ''
  teamsPlayOff: Array<string>
  year: string | undefined
}

export const Groups = ({matchesInGroup, teamsPlayOff, year}: Groups) => {
  const sortTitlesGroups = uniqueTitleGroups(matchesInGroup)

  const mappedMatchesInGroups = sortTitlesGroups.map((titleGroup, index) => {
    const allMatchesInGroup = getMatchesInGroup(titleGroup, matchesInGroup)
    const uniqueTeamsInGroup = getUniqueTeamsInGroup(allMatchesInGroup)

    const dataTeamsInGroup = uniqueTeamsInGroup.map((nameTeams: string) => {
      const dataTeam = getInitialDataTeam(nameTeams)
      return addDataTeamInGroup(dataTeam, allMatchesInGroup, teamsPlayOff)
    })

    const dataForGroup = sortTeamsInGroup(dataTeamsInGroup)

    return (
      <div key={index} className={s.containerGroup}>
        <Group dataForGroup={dataForGroup} year={year} titleGroup={titleGroup}/>
        <MatchesInGroup matches={allMatchesInGroup}/>
      </div>
    )
  })

  return (
    <div className={s.wrapper}> {mappedMatchesInGroups} </div>
  )
}