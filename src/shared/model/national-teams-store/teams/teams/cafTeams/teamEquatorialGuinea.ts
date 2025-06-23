import { Team } from '../../classTeam/classTeam'
import { flagEquatorialGuinea } from '@/shared/assets/flags'
import { coatOfArmsEquatorialGuinea } from '@/shared/assets/coat-of-arms'
import { iconEquatorialGuinea } from '@/shared/assets/iconFootballAssociation'

export const teamEquatorialGuinea = new Team({
  confederation: 'CAF',
  names: [{ nameCountry: 'Equatorial Guinea', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagEquatorialGuinea, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsEquatorialGuinea,
  associationLogo: iconEquatorialGuinea,
  associationDate: {
    founded: '1957',
    fifaAffiliation: '1986',
    confederationAffiliation: '1986',
  },
})