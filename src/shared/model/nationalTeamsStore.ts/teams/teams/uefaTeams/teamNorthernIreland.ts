import { Team } from '../../classTeam/classTeam'
import { flagNorthernIreland } from '@/shared/assets/flags'
import { coatOfArmsNorthernIreland } from '@/shared/assets/coat-of-arms'
import { iconNorthernIreland } from '@/shared/assets/iconFootballAssociation'

export const teamNorthernIreland = new Team({
  confederation: 'UEFA',
  names: [{ nameCountry: 'North. Ireland', period: '0000-p.t.' }],
  flags: [{ countryFlag: flagNorthernIreland, period: '0000-p.t.' }],
  coatOfArms: coatOfArmsNorthernIreland,
  associationLogo: iconNorthernIreland,
  associationDate: {
    founded: '1880',
    fifaAffiliation: '1911',
    confederationAffiliation: '1954',
  },
})