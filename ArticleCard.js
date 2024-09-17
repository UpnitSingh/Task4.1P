import React from 'react';
import { Card, Image, Icon } from 'semantic-ui-react';
import { faker } from '@faker-js/faker';


const ArticleCard = () => (
  <Card className="article-card">
    <Image src={`https://picsum.photos/200/150`} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{faker.lorem.words(3)}</Card.Header>
      <Card.Meta>{faker.lorem.word()}</Card.Meta>
      <Card.Description>{faker.lorem.sentences(2)}</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <Icon name='star' /> 5 Author's Name
    </Card.Content>
  </Card>
);

export default ArticleCard;
