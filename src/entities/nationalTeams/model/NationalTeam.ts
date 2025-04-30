import { CountryName, CountryFlag, AssociationDate } from "./types";
import { DEFAULT_RATING, DEFAULT_IS_COUNTRY_REAL } from "./constants";
import { v1 } from "uuid";

export class NationalTeam {
  id: string;
  names: CountryName[];
  associationIcon: string;
  flags: CountryFlag[];
  coatOfArms: string;
  associationDate: AssociationDate;
  rating: {
    points: number;
    place: number;
  };
  isCountryReal: boolean;

  constructor({
    names,
    associationIcon,
    flags,
    coatOfArms,
    associationDate,
    rating = DEFAULT_RATING,
    isCountryReal = DEFAULT_IS_COUNTRY_REAL,
  }: Partial<Omit<NationalTeam, "id">>) {
    this.id = v1()
    this.names = names!;
    this.associationIcon = associationIcon!;
    this.flags = flags!;
    this.coatOfArms = coatOfArms!;
    this.associationDate = associationDate!;
    this.rating = rating;
    this.isCountryReal = isCountryReal;
  }
}
