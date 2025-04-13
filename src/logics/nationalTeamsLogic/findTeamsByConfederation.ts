import { teamsByConfederation } from "data/nationalTeamsData/nationalTeams"
import { Confederation } from "data/nationalTeamsData/type-nationalTeams"

export const findTeamsByConfederation = (coutryName: string): Confederation => {
  const confederationList: Confederation[] = Object.keys(teamsByConfederation) as Confederation[];
  let nameConfederation: Confederation = 'uefa';

  confederationList.forEach(confeder => {
    if(teamsByConfederation[confeder].includes(coutryName)) {
      nameConfederation = confeder
      return
    } 
  })

  return nameConfederation
}