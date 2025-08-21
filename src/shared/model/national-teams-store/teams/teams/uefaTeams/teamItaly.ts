import { Team } from '../../classTeam/classTeam'
import { flagItaly, flagItaly1 } from '@/shared/assets/image/flags'
import { coatOfArmsItaly } from '@/shared/assets/image/coat-of-arms'
import { iconItaly } from '@/shared/assets/iconFootballAssociation'

export const teamItaly = new Team({
  confederation: 'UEFA',
  names: [{ nameCountry: 'Italy', period: '0000-p.t.' }],
  flags: [
    { countryFlag: flagItaly, period: '1946-p.t.' },
    { countryFlag: flagItaly1, period: '1925-1945' },
  ],
  coatOfArms: coatOfArmsItaly,
  associationLogo: iconItaly,
  associationDate: {
    founded: '1898',
    fifaAffiliation: '1905',
    confederationAffiliation: '1954',
  },
})
