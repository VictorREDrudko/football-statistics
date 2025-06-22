import { Team } from '../../classTeam/classTeam'
import { flagTimorLeste } from '@/shared/assets/flags'
import { coatOfArmsTimorLeste } from '@/shared/assets/coat-of-arms'
import { iconTimorLeste } from '@/shared/assets/iconFootballAssociation'

export const teamTimorLeste = new Team({
  confederation: 'AFC',
  names: [{ nameCountry: 'Timor-Leste', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagTimorLeste, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsTimorLeste,
  associationLogo: iconTimorLeste,
  associationDate: {
    founded: '2002',
    fifaAffiliation: '2005',
    confederationAffiliation: '2002',
  },
})