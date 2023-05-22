import { gql } from "@apollo/client";

export const CONTINENTS_LIST = gql`
  query continents($filter: ContinentFilterInput) {
    continents(filter: $filter) {
      name
      code
      countries {
        code
        name
      }
    }
  }
`;
