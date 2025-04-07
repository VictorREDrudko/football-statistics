export const getYearTournament = (tournamentId: string) => {
  return tournamentId.split('-')[1]
}