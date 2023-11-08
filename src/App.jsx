import React from 'react';
import Card from './components/Card';
import CardBody from './components/CardBody';
import CardTitle from './components/CardTitle';
import CardText from './components/CardText';
import CardLink from './components/CardLink';

const App = () => {
  return (
    <div>
      <Card>
        <img src="https://www.artotoys.ru/wa-data/public/shop/products/82/22/2282/images/3417/3417.750@2x.jpg" className="card-img-top" alt="..." />
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <CardLink href="#">Go somewhere</CardLink>
        </CardBody>
      </Card>
      <Card>
        <CardBody>
          <CardTitle>Special title treatment</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <CardLink href="#">Go somewhere</CardLink>
        </CardBody>
      </Card>
    </div>
  );
};

export default App;
