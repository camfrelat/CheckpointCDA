import { ICountry } from "./ICountry";

export interface IContinent {
  code: string;
  name: string;
  countries: ICountry[];
}
