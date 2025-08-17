export const getTournamentNumber = (id: string) => {
  return +id.split('-')[0];
}