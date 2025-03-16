import { ApolloClient, InMemoryCache, split, HttpLink } from "@apollo/client/core";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { createClient } from "graphql-ws";
import { getMainDefinition } from "@apollo/client/utilities";

// Création du lien HTTP pour les requêtes classiques
const httpLink = new HttpLink({
  uri: "http://localhost:4000/graphql", // Remplace par ton URL GraphQL HTTP
});

// Création du lien WebSocket pour les subscriptions
const wsLink = new GraphQLWsLink(
  createClient({
    url: "ws://localhost:4000/graphql", // Remplace par l’URL WebSocket de ton serveur
  })
);

// Choix entre WebSocket ou HTTP en fonction du type de requête
const link = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" && definition.operation === "subscription"
    );
  },
  wsLink,
  httpLink
);

// Création du client Apollo
const apolloClient = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

export default apolloClient;