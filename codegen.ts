import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
  documents: ['graphql/**/*.ts', '!graphql/gen/**/*'],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    './graphql/gen/': {
      preset: 'client',
    },
  },
};

export default config;
