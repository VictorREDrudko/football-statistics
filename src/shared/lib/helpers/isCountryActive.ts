import { nationalTeamsData } from "@/entities"

export const isCountryActive = (countryName: string) => {
  return nationalTeamsData[countryName].isCountryReal
}