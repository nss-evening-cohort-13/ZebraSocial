import React, { Component } from 'react';
import productData from '../helpers/data/productData';
import ProductsCard from '../components/cards/products';

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
          <div className='products-container m-3 mt-5'>
            <div>
        <h1>Products</h1>
        <h3>Animals(3)</h3>
        {list}
            </div>
         </div>
      </div>
      );
    }
}
