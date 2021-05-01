import React, { Component } from 'react';
import PropTypes from 'prop-types';
import productData from '../helpers/data/productData';
import ProductsCard from '../components/Cards/productsCard';

class SearchResults extends Component {
    state = {
      results: [],
      searchName: ''
    }

    componentDidMount() {
      this.populateResults();
    }

     populateResults = () => {
       const searchName = this.props.match.params.term;
       productData.getSearchedProducts(searchName.toLowerCase())
         .then((response) => {
           this.setState({
             results: response,
             searchName
           });
         });
     }

     componentDidUpdate(prevState) {
       if (prevState.searchName !== this.props.match.params.term) {
         this.populateResults();
       }
     }

     render() {
       const { results } = this.state;

       const showResults = () => (
         results.map((result) => (
             <ProductsCard key={result.id} animal={result} />
         ))
       );
       return (
        <div className="Animals-products">
          <div className="products-container">
          {showResults()}
        </div>
      </div>
       );
     }
}
SearchResults.propTypes = {
  match: PropTypes.any,
  params: PropTypes.any,
};

export default SearchResults;
