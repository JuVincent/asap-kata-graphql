import { expressMiddleware } from '@apollo/server/express4';
import { readFileSync } from 'fs';
import { resolvers } from './resolvers';
import gql from 'graphql-tag';
import { ApolloServer } from '@apollo/server';
import express from 'express';

const typeDefs = gql(readFileSync('./src/presentation/gql/schema.gql', 'utf-8'));

const gqlEngine = new ApolloServer({
  typeDefs,
  resolvers,
});

// Fonction pour démarrer Apollo Server et retourner le middleware
export async function setupGraphQL(app: express.Express) {
  await gqlEngine.start();
  app.use('/graphql', express.json(), expressMiddleware(gqlEngine));
}