import React, { Component } from 'react';
import {
  Card, CardBody
}
  from 'reactstrap';
import productData from '../helpers/data/productData';

export default class ProductCategories extends Component {
    state = {
      animals: [],
    };

    componentDidMount() {
      productData.getAllAnimalProducts()
        .then((data) => this.setState({ animals: data }));
    }

    render() {
      const { animals } = this.state;
      const productList = (animal) => (
                <div>
                    {animal.type}
                    <hr></hr>
                </div>
      );
      const list = animals.map(productList);
      return (
        <div>
          <Card className='productCat m-3 mt-5'>
            <CardBody>
        <h1>Products</h1>
        <h3>Animals(3)</h3>
        {list}
            </CardBody>
         </Card>
      </div>
      );
    }
}
