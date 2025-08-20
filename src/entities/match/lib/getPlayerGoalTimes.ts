export const getPlayerGoalTimes = (playerGoalTimes: string) => {
  // add '
  let goalTimes =
    playerGoalTimes.indexOf(',') === -1
      ? playerGoalTimes + "'"
      : playerGoalTimes
          .split(',')
          .map((time) => time + "'")
          .join()

  // replace "(...)'", "'(...)"
  if (goalTimes.includes(')')) {
    goalTimes = goalTimes.replace(")'", ')').replace('(', "'(")
  }

  return goalTimes
}
