import { gql } from "@apollo/client";

export const COUNTRIES_LIST = gql`
  query countries($filter: CountryFilterInput) {
    countries(filter: $filter) {
      code
      name
      emoji
    }
  }
`;
export const COUNTRY = gql`
  query country($code: ID!) {
    country(code: $code) {
      code
      name
    }
  }
`;
