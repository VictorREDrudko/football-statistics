import { Team } from '../../classTeam/classTeam'
import { flagIndonesia, flagIndonesia2 } from '@/shared/assets/flags'
import { coatOfArmsIndonesia } from '@/shared/assets/coat-of-arms'
import { iconIndonesia } from '@/shared/assets/iconFootballAssociation'

export const teamIndonesia = new Team({
  confederation: 'AFC',
  names: [
    { nameCountry: 'Indonesia', period: '1949-p.t.' },
    { nameCountry: 'D.East Indies', period: '1800-1948' },
  ],
  flags: [
    { countryFlag: flagIndonesia, period: '1949-p.t.' },
    { countryFlag: flagIndonesia2, period: '1800-1948' },
  ],
  coatOfArms: coatOfArmsIndonesia,
  associationLogo: iconIndonesia,
  associationDate: {
    founded: '1930',
    fifaAffiliation: '1952',
    confederationAffiliation: '1954',
  },
})