import { gql } from 'urql';

export const meQuery = gql`
query AllFilms {
  allFilms {
    films {
      title
      director
      releaseDate
    }
  }
}

`;
