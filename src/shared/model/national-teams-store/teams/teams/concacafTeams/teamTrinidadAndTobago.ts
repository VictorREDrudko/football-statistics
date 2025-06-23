import { Team } from '../../classTeam/classTeam'
import { flagTrinidadAndTobago } from '@/shared/assets/flags'
import { coatOfArmsTrinidadAndTobago } from '@/shared/assets/coat-of-arms'
import { iconTrinidadAndTobago } from '@/shared/assets/iconFootballAssociation'

export const teamTrinidadAndTobago = new Team({
  confederation: 'CONCACAF',
  names: [{ nameCountry: 'Trinidad & Tobago', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagTrinidadAndTobago, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsTrinidadAndTobago,
  associationLogo: iconTrinidadAndTobago,
  associationDate: {
    founded: '1908',
    fifaAffiliation: '1964',
    confederationAffiliation: '1964',
  },
})