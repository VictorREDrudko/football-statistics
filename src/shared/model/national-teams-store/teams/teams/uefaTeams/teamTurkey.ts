import { Team } from '../../classTeam/classTeam'
import { flagTurkey } from '@/shared/assets/flags'
import { coatOfArmsTurkey } from '@/shared/assets/coat-of-arms'
import { iconTurkey } from '@/shared/assets/iconFootballAssociation'

export const teamTurkey = new Team({
  confederation: 'UEFA',
  names: [{ nameCountry: 'Turkey', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagTurkey, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsTurkey,
  associationLogo: iconTurkey,
  associationDate: {
    founded: '1923',
    fifaAffiliation: '1923',
    confederationAffiliation: '1962',
  },
})