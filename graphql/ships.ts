import gql from "graphql-tag";

const ships = gql`
  query ships {
    ships(input: { pagination: { limit: 20, offset: 0 } }) {
      id
      class
      image
      active
      name
      missions {
        flight
        name
      }
    }
  }
`;

const query = { ships };
const mutations = {};
const Ships = { query, mutations };
export { Ships };
