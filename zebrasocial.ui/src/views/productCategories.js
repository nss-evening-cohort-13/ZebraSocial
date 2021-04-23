import React, { Component } from 'react';
import productData from '../helpers/data/productData';

export default class ProductCategories extends Component {
    state = {
      products: []
    };

    componentDidMount() {
      productData.getAllProducts()
        .then((data) => this.setState({ products: data }));
    }

    render() {
      const { products } = this.state;
      const productList = (product) => (
                <div>
                    {product.name}
                </div>
      );
      const list = products.map(productList);
      return (
        <>
        <h2>Products list</h2>
        {list}
      </>
      );
    }
}
