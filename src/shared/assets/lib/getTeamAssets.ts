import { Country } from '@/shared/types/country/country'
import { coatOfArms, flags, iconsAssociation } from '@/shared/assets/image'

export const getTeamAssets = (country: Country) => {
  return {
    flag: flags[country as keyof typeof flags],
    coatOfArms: coatOfArms[country as keyof typeof coatOfArms],
    icon: iconsAssociation[country as keyof typeof iconsAssociation],
  }
}
