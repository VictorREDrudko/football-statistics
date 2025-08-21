import { Team } from '../../classTeam/classTeam'
import { flagAntiguaAndBarbuda } from '@/shared/assets/image/flags'
import { coatOfArmsAntiguaAndBarbuda } from '@/shared/assets/image/coat-of-arms'
import { iconAntiguaAndBarbuda } from '@/shared/assets/iconFootballAssociation'

export const teamAntiguaAndBarbuda = new Team({
  confederation: 'CONCACAF',
  names: [{ nameCountry: 'Antigua and Barbuda', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagAntiguaAndBarbuda, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsAntiguaAndBarbuda,
  associationLogo: iconAntiguaAndBarbuda,
  associationDate: {
    founded: '1928',
    fifaAffiliation: '1972',
    confederationAffiliation: '1961',
  },
})