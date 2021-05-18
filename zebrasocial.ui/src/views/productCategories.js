import React, { Component } from 'react';
import productData from '../helpers/data/productData';
import ProductsCard from '../components/Cards/productsCard';
import MyModal from '../components/AppModal';
import EditAnimalForm from '../components/Forms/EditAnimalForm';

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
        <h3>Animals</h3>
        <MyModal title={'Add Animal'} color={'success'} buttonLabel={'Add Animal'}>
                 <EditAnimalForm
                    key={animals.id}
                    animal={animals}
                  />
        </MyModal>
            <div className='animal'>
          <div className='a-container d-flex flex-wrap'>
        {productList()}
            </div>
         </div>
      </>
      );
    }
}
