import { graphql } from './gen/gql';


export const testQuery = graphql(`
  query AllFilms {
    allFilms {
      films {
        title
        director
        releaseDate
      }
    }
  }
`);
