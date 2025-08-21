import { Team } from '../../classTeam/classTeam'
import { flagBosniaAndHerzegovina } from '@/shared/assets/image/flags'
import { coatOfArmsBosniaAndHerzegovina } from '@/shared/assets/image/coat-of-arms'
import { iconBosniaAndHerzegovina } from '@/shared/assets/iconFootballAssociation'

export const teamBosniaAndHerzegovina = new Team({
  confederation: 'UEFA',
  names: [{ nameCountry: 'Bosnia and Herzegovina', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagBosniaAndHerzegovina, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsBosniaAndHerzegovina,
  associationLogo: iconBosniaAndHerzegovina,
  associationDate: {
    founded: '1920',
    fifaAffiliation: '1996',
    confederationAffiliation: '1998',
  },
})
