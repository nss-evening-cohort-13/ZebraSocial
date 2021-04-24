import React from 'react';
import {
  Card, CardImg, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';

export default class ProductsCard extends React.Component {
  render() {
    const { animal } = this.props;
    return (
        <div className="card-container">
            <Card>
                <CardImg top width="100%" src={animal.imageUrl} alt={animal.name} />
                <CardBody>
                    <CardTitle tag="h5">{animal.name}</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">${animal.price}</CardSubtitle>
                </CardBody>
            </Card>
        </div>
    );
  }
}
