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
            <div className='animal'>
        <h3>Animals</h3>
          <div className='products-container'>
        {productList()}
            </div>
         </div>
      </>
      );
    }
}
