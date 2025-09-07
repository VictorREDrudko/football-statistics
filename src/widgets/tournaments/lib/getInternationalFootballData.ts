// import { footballStructure, OrganizationData } from '@/shared/model'

import { footballStructure } from "@/shared/model/football-structure/footballStructure"
import { OrganizationData } from "@/shared/model/football-structure/types"

export const getInternationalFootballData = (): OrganizationData[] => {
  return [footballStructure.internationalLevel.FIFA]
}
