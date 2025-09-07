export const formattedGoalTimes = (time: string) => {
  // add '
  let timeWithMark =
    time.indexOf(',') === -1
      ? time + "'"
      : time
          .split(',')
          .map((minutes) => minutes + "'")
          .join()

  // replace "(...)'", "'(...)"
  if (timeWithMark.includes(')')) {
    timeWithMark = timeWithMark.replace(")'", ')').replace('(', "'(")
  }

  return timeWithMark
}
