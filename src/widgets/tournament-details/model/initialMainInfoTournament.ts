type InitialMainInfoTournament = {
  hostCountry: CharacteristicString,
  dates: CharacteristicString,
  teamsQualification: CharacteristicNumber,
  teamsFinalStage: CharacteristicNumber,
  matches: CharacteristicNumber,
  goals: CharacteristicNumber,
  attendance: CharacteristicNumber,
  scorers: {
    characteristic: string,
    value: string[],
  },
}

type CharacteristicString = {
  characteristic: string
  value: string
}

type CharacteristicNumber = {
  characteristic: string
  value: number
}

export const initialMainInfoTournament: InitialMainInfoTournament = {
  hostCountry: {
    characteristic: 'Host country',
    value: 'not',
  },
  dates: {
    characteristic: 'Dates',
    value: 'not',
  },
  teamsQualification: {
    characteristic: 'Teams (qualification)',
    value: 0,
  },
  teamsFinalStage: {
    characteristic: 'Teams (final stage)',
    value: 0,
  },
  matches: {
    characteristic: 'Matches played',
    value: 0,
  },
  goals: {
    characteristic: 'Goals scored',
    value: 0,
  },
  attendance: {
    characteristic: 'Attendance',
    value: 0,
  },
  scorers: {
    characteristic: 'Top scorer(s)',
    value: [],
  },
}

