import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

class SearchBar extends Component {
  state = {
    text: ''
  }

   handleSubmit = (e) => {
     e.preventDefault();
     this.props.history.push(`/search/${this.state.text}`);

     this.setState({
       text: ''
     });
   }

   handleChange = (e) => {
     this.setState({
       [e.target.name]: e.target.value,
     });
   }

   render() {
     return (
      <form onSubmit={this.handleSubmit}>
      <input placeholder='search products' type='text' name='text' value={this.state.text} onChange={this.handleChange} />
    </form>
     );
   }
}

SearchBar.propTypes = {
  history: PropTypes.any,
};

export default withRouter(SearchBar);
