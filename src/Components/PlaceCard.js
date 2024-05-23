import React from 'react';
import { Card, Image } from 'semantic-ui-react';

const PlaceCard = ({ placeName, placeImage }) => {
  return (
    <Card>
      <Image src={placeImage} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{placeName}</Card.Header>
      </Card.Content>
    </Card>
  );
};

export default PlaceCard;
