type Stadium = {
  title: string;
  city: string;
  country: string;
};

type CountryStadiums = {
  [stadiumKey: string]: Stadium;
};

export type Stadiums = {
  [countryKey: string]: CountryStadiums;
};