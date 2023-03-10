import { useQuery } from 'urql';
import { testQuery } from '../graphql/test';


const [{ data }] = useQuery({
  query: testQuery,
});

const asd = data?.allFilms;
