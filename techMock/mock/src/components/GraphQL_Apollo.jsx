import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider, useQuery, gql } from "@apollo/client";
import { Card, CardContent, Typography, Grid, CircularProgress } from "@mui/material";

// Initialize Apollo Client with Countries GraphQL API
const client = new ApolloClient({
  uri: "https://countries.trevorblades.com/graphql",
  cache: new InMemoryCache(),
});

// GraphQL Queries
const GET_COUNTRY_NAMES = gql`
  query {
    countries {
      name
    }
  }
`;

const GET_COUNTRY_CODES = gql`
  query {
    countries {
      code
    }
  }
`;

const GET_COUNTRY_CONTINENTS = gql`
  query {
    countries {
      name
      continent {
        name
      }
    }
  }
`;

const GraphQL_Apollo = () => {
  const { loading: loadingNames, error: errorNames, data: dataNames } = useQuery(GET_COUNTRY_NAMES);
  const { loading: loadingCodes, error: errorCodes, data: dataCodes } = useQuery(GET_COUNTRY_CODES);
  const { loading: loadingContinents, error: errorContinents, data: dataContinents } = useQuery(GET_COUNTRY_CONTINENTS);

  if (loadingNames || loadingCodes || loadingContinents) return <CircularProgress />;
  if (errorNames || errorCodes || errorContinents) {
    console.error("GraphQL Error:", errorNames || errorCodes || errorContinents);
    return <Typography color="error">Error fetching data</Typography>;
  }

  return (
    <Grid container spacing={3}>
      {dataNames.countries.slice(0, 12).map((country, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card sx={{ textAlign: "center", p: 2 }}>
            <CardContent>
              <Typography variant="h6">{country.name}</Typography>
              <Typography variant="body2">Code: {dataCodes.countries[index]?.code}</Typography>
              <Typography variant="body2">Continent: {dataContinents.countries[index]?.continent?.name}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default () => (
  <ApolloProvider client={client}>
    <GraphQL_Apollo />
  </ApolloProvider>
);