export const urlWithHyphen = (team: string) => {
  return team.replace(/\s+/g, '-');
};

export const urlWithoutHyphen = (team: string) => {
  return team.replace(/-/g, ' ');
};