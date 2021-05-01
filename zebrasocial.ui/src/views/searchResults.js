import React, { Component } from 'react';
import PropTypes from 'prop-types';
import productData from '../helpers/data/productData';
import ProductsCard from '../components/Cards/productsCard';

class SearchResults extends Component {
    state = {
      results: [],
      searchTerm: ''
    }

    componentDidMount() {
      this.populateResults();
    }

     populateResults = () => {
       const searchTerm = this.props.match.params.term;

       productData.getSearchedProducts(searchTerm.toLowerCase())
         .then((response) => {
           this.setState({
             results: response,
             searchTerm
           });
         });
     }

     componentDidUpdate(prevState) {
       if (prevState.searchTerm !== this.props.match.params.term) {
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
        <h1>Search Results</h1>
        <div className="animals">
          </div>
          <div className="product-cards-container">
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
