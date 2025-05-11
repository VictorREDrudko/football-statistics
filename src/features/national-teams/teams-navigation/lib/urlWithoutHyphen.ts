export const urlWithoutHyphen = (team: string) => {
  return team.replace(/-/g, ' ');
};