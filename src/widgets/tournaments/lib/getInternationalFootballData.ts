import { footballStructure, OrganizationData } from '@/shared/model'

export const getInternationalFootballData = (): OrganizationData[] => {
  return [footballStructure.internationalLevel.FIFA]
}
