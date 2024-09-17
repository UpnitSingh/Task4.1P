import React from 'react';
import { Container, Grid, Input, Button } from 'semantic-ui-react';

const Footer = () => (
  <Container fluid className="footer" style={{ padding: '2em 0', background: '#f7f7f7' }}>
    <Grid divided='vertically'>
      <Grid.Row columns={3}>
        <Grid.Column>
          <h3>Explore</h3>
          <ul>
            <li>Home</li>
            <li>Questions</li>
            <li>Articles</li>
            <li>Tutorials</li>
          </ul>
        </Grid.Column>
        <Grid.Column>
          <h3>Support</h3>
          <ul>
            <li>FAQs</li>
            <li>Help</li>
            <li>Contact Us</li>
          </ul>
        </Grid.Column>
        <Grid.Column>
          <h3>Stay Connected</h3>
          <ul>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
          </ul>
        </Grid.Column>
      </Grid.Row>
    </Grid>
    <div style={{ textAlign: 'center', padding: '1em 0' }}>
      <Input placeholder="Enter your email" action={<Button>Subscribe</Button>} />
      <p>Upnit singh</p>
    </div>
  </Container>
);

export default Footer;
