import { Repository } from "typeorm";
import { ICountryInfos } from "./interfaces";
import Country from "../entity/Country";
import dataSource from "../lib/dataSource";

class CountryService {
  countryRepository: Repository<Country>;

  constructor() {
    this.countryRepository = dataSource.getRepository(Country);
  }

  async get(code: string): Promise<Country | null> {
    let country = await this.countryRepository.findOneBy({ code });

    return country;
  }

  async getAll(): Promise<Country[]> {
    return await this.countryRepository.find();
  }

  async create({ code, name, emoji }: ICountryInfos): Promise<Country> {
    let country = await this.countryRepository.save({ code, name, emoji });

    return country;
  }
}

export default CountryService;
