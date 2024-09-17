import React from 'react';
import { Container } from 'semantic-ui-react';
import Header from './components/Header';
import FeaturedArticles from './components/FeatureArticels';
import FeaturedTutorials from './components/FeaturedTutorials';
import Footer from './components/Footer';

function App() {
  return (
    <Container>
      <Header />
      <FeaturedArticles />
      <FeaturedTutorials />
      <Footer />
    </Container>
  );
}

export default App;
