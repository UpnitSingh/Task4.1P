import React from 'react';
import { Grid, Header, Button } from 'semantic-ui-react';
import TutorialCard from './TutorialCard';

const FeaturedTutorials = () => (
  <>
    <Header as="h2" textAlign="center">Featured Tutorials</Header>
    <Grid container columns={4}>
      {[...Array(3)].map((_, i) => (
        <Grid.Column key={i}>
          <TutorialCard />
        </Grid.Column>
      ))}
    </Grid>
    <Button fluid>See all tutorials</Button>
  </>
);

export default FeaturedTutorials;
