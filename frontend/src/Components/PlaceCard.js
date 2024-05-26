import { Card, Image } from 'semantic-ui-react';

const PlaceCard = ({ placeName, placeImage }) => {
  return (
    <Card className>
      <Image src={placeImage} className="place-images" />
      <Card.Content>
        <Card.Header>{placeName}</Card.Header>
      </Card.Content>
    </Card>
  );
};

export default PlaceCard;
