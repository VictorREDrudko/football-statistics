import { teamByConfederation } from "../model/namesTeamByConfederation";
import { ConfederationCode } from "../model/types/types";

export const findConfederationByTeam = (coutryName: string): ConfederationCode => {
  const confederationsCodes = Object.keys(teamByConfederation) as ConfederationCode[]
  let nameConfederation: ConfederationCode = 'UEFA';

  confederationsCodes.forEach(confederation => {
    if(teamByConfederation[confederation].includes(coutryName)) {
      nameConfederation = confederation
      return
    } 
  })

  return nameConfederation as ConfederationCode
}