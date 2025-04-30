export type CountryName = {
  nameCountry: string;
  period: string;
};

export type CountryFlag = {
  flagCountry: string;
  period: string;
};

export type AssociationDate = {
  founded: string;
  fifaAffiliation: string;
  confederationAffiliation: string;
};


// type teams grouped by Confederations
export type TeamsByConfederation = {
  [name in Confederation | 'all']: string[];
};

type Confederation =
  | "afc"
  | "caf"
  | "concacaf"
  | "conmebol"
  | "ofc"
  | "uefa";