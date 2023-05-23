import { Repository } from "typeorm";
import { ICountryInfos } from "./interfaces";
import Country from "../entity/Country";
import dataSource from "../lib/dataSource";

class CountryService {
  countryRepository: Repository<Country>;

  constructor() {
    this.countryRepository = dataSource.getRepository(Country);
  }

  async get(id: number): Promise<Country | null> {
    let country = await this.countryRepository.findOneBy({ id });

    return country;
  }

  async create({ code, name, emoji }: ICountryInfos): Promise<Country> {
    let country = await this.countryRepository.save({ code, name, emoji });

    return country;
  }
}

export default CountryService;
