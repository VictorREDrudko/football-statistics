import { nationalTeams } from "../../../data/nationalTeamsData/nationalTeams"

export const isCountryActive = (countryName: string) => {
  return nationalTeams[countryName].isCountryReal
}