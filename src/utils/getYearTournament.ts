export const getYearTournament = (date: string) => {
  // дата может быть в двух форматах "01.06.1934" и "01.06.1934 REPLAY"
  return date.split('.')[2].split(" ")[0]
}