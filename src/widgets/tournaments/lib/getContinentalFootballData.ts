import {
  ContinentalConfederationCode,
  footballStructure,
  OrganizationData,
} from '@/shared/model'

export const getContinentalFootballData = (): OrganizationData[] => {
  return (
    Object.keys(
      footballStructure.continentalLevel
    ) as ContinentalConfederationCode[]
  ).map((confederationCode) => {
    return footballStructure.continentalLevel[confederationCode]
  })
}
