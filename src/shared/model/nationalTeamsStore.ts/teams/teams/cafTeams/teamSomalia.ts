import { Team } from '../../classTeam/classTeam'
import { flagSomalia } from '@/shared/assets/flags'
import { coatOfArmsSomalia } from '@/shared/assets/coat-of-arms'
import { iconSomalia } from '@/shared/assets/iconFootballAssociation'

export const teamSomalia = new Team({
  confederation: 'CAF',
  names: [{ nameCountry: 'Somalia', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagSomalia, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsSomalia,
  associationLogo: iconSomalia,
  associationDate: {
    founded: '1951',
    fifaAffiliation: '1962',
    confederationAffiliation: '1968',
  },
})