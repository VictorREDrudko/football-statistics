// type teams grouped by Confederations
export type TeamsByConfederation = {
  [name in Confederation]: string[];
};

export type Confederation =
  | "afc"
  | "caf"
  | "concacaf"
  | "conmebol"
  | "ofc"
  | "uefa";

// type national teams
export type NationalTeams = {
  [name: string]: NationalTeam;
};

export type NationalTeam = {
  id: string;
  names: CountryName[];
  associationIcon: string;
  flags: CountryFlag[];
  coatOfArms: string;
  associationDate: AssociationDate;
  rating: number;
};

export type CountryName = {
  nameCountry: string;
  period: string;
};

export type CountryFlag = {
  flagCountry: string;
  period: string;
};

export type AssociationDate = {
  founded: number;
  fifaAffiliation: number | "-";
  confederationAffiliation: number;
};

export type InfoCup = {
  appearances: number;
  champions: number[];
  secondPlace: number[];
};
