export const getNumberTournament = (tournamentId: string) => {
  return tournamentId.split('-')[0]
}