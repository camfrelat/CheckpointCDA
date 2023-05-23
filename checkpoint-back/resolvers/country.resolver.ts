import { Arg, Query, Mutation, Resolver } from "type-graphql";
import Country, { CreateCountryInput } from "../entity/Country";
import CountryService from "../services/country.service";

@Resolver(Country)
export class CountryResolver {
  // ADD constructor with service

  /* QUERIES */

  @Query(() => Country)
  async getCountry(@Arg("id") id: string): Promise<Country | null> {
    let country = await new CountryService().get(id);

    return country;
  }

  @Query(() => [Country])
  async getAllCountries(): Promise<Country[]> {
    let countries = await new CountryService().getAll();

    return countries;
  }

  /* MUTATIONS */

  @Mutation(() => Country)
  async createCountry(
    @Arg("code") code: string,
    @Arg("name") name: string,
    @Arg("emoji") emoji: string
  ): Promise<Country> {
    try {
      let country = await new CountryService().create({
        code,
        name,
        emoji,
      });

      return country;
    } catch (error) {
      console.log(error);
      throw new Error("Error : country was not created");
    }
  }
}
