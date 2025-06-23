import { Team } from '../../classTeam/classTeam'
import { flagTahiti } from '@/shared/assets/flags'
import { coatOfArmsTahiti } from '@/shared/assets/coat-of-arms'
import { iconTahiti } from '@/shared/assets/iconFootballAssociation'

export const teamTahiti = new Team({
  confederation: 'OFC',
  names: [{ nameCountry: 'Tahiti', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagTahiti, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsTahiti,
  associationLogo: iconTahiti,
  associationDate: {
    founded: '1989',
    fifaAffiliation: '1990',
    confederationAffiliation: '1990',
  },
})