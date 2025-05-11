import { teamsByConfederation } from "../../data/nationalTeamsData/nationalTeams";
import { Confeder, Confederation } from "../../data/nationalTeamsData/type-nationalTeams";


export const findTeamsByConfederation = (coutryName: string): Confeder => {
  const confederationList: Confederation[] = Object.keys(teamsByConfederation) as Confederation[];
  const filterConfederationList = confederationList.filter(confeder => confeder !== 'FIFA')
  let nameConfederation: Confederation = 'UEFA';

  filterConfederationList.forEach(confeder => {
    if(teamsByConfederation[confeder].includes(coutryName)) {
      nameConfederation = confeder
      return
    } 
  })

  return nameConfederation as Confeder
}