import Button from 'react-bootstrap/Button';
import React from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
function ProfilePhoto() {
  return (
    <Card style={{ width: '20rem', height: 600  }}>
      <Card.Img variant="top" src="/imgs/profilephoto.jpg" alt='image' />
      <Card.Body>
        <Card.Title>albert</Card.Title>
        <Card.Text>
          this is our contestent
        </Card.Text>
        <Button variant="primary">is this you</Button>
      </Card.Body>
    </Card>
  );
}

export default ProfilePhoto;