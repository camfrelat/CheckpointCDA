export interface ICountry {
  code: string;
  name: string;
  emoji: string;
}

export interface ICountryDetails extends ICountry {
  currency: string;
  capital: string;
}
