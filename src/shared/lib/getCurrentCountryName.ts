import { CountryName } from "@/entities";

export const getCurrentCountryName = (names: CountryName[]) => {
  return names[0].nameCountry;
}