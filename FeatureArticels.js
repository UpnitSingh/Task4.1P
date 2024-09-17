import React from 'react';
import { Grid, Header, Button } from 'semantic-ui-react';
import ArticleCard from './ArticleCard';

const FeaturedArticles = () => (
  <>
    <Header as="h2" textAlign="center">Featured Articles</Header>
    <Grid container columns={4}>
      {[...Array(3)].map((_, i) => (
        <Grid.Column key={i}>
          <ArticleCard />
        </Grid.Column>
      ))}
    </Grid>
    <Button fluid>See all articles</Button>
  </>
);

export default FeaturedArticles;
