import React, { Component } from 'react';
import productData from '../helpers/data/productData';
import ProductsCard from '../components/Cards/productsCard';

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
      const productList = () => (
        animals.map((animal) => <ProductsCard key={animal.id} animal={animal} />)
      );
      return (
        <>
          <div className='products-container'>
            <div>
        <h3>Animals(3)</h3>
        {productList()}
            </div>
         </div>
      </>
      );
    }
}
