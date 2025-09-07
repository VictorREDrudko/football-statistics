// import {
//   ContinentalConfederationCode,
//   footballStructure,
//   OrganizationData,
// } from '@/shared/model'

import { footballStructure } from "@/shared/model/football-structure/footballStructure"
import { OrganizationData, ContinentalConfederationCode } from "@/shared/model/football-structure/types"

export const getContinentalFootballData = (): OrganizationData[] => {
  return (
    Object.keys(
      footballStructure.continentalLevel
    ) as ContinentalConfederationCode[]
  ).map((confederationCode) => {
    return footballStructure.continentalLevel[confederationCode]
  })
}
