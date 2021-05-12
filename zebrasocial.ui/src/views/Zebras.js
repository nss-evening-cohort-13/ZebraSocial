import React, { Component } from 'react';
import productData from '../helpers/data/productData';
import AnimalsCard from '../components/Cards/AnimalCards';

export default class AnimalsCategories extends Component {
    state = {
      animals: [],
    };

    componentDidMount() {
      productData.getAllAnimalProducts()
        .then((data) => this.setState({ animals: data }));
    }

    render() {
      const { animals } = this.state;
      const animalList = () => (
        animals.map((animal) => <AnimalsCard key={animal.id} animal={animal} />)
      );
      return (
        <>
          <div className='animal'>
        <h3>Pick Your Animal</h3>
            <div className='a-container '>
        {animalList()}
            </div>
         </div>
      </>
      );
    }
}
