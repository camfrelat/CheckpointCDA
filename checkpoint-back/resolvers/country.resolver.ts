import { Arg, Query, Mutation, Resolver } from "type-graphql";
import Country, { CreateCountryInput } from "../entity/Country";
import CountryService from "../services/country.service";

@Resolver(Country)
export class CountryResolver {
  // ADD constructor with service

  /* QUERIES */

  @Query(() => Country)
  async getCountry(@Arg("id") id: number): Promise<Country | null> {
    let country = await new CountryService().get(id);

    return country;
  }

  /* MUTATIONS */

  @Mutation(() => Country)
  async createCountry(
    @Arg("createCountryInput") createCountryInput: CreateCountryInput
  ): Promise<Country> {
    const { code, name, emoji } = createCountryInput;

    let country = await new CountryService().create({
      code,
      name,
      emoji,
    });

    return country;
  }
}
