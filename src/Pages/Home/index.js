import React, { useEffect, useState } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { ProductList } from './styles';
import api from '../../services/api';
import { formatPrice } from '../../util/format';
import * as CartActions from '../../store/models/cart/actions';

function Home({ addToCart }) {
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      try {
        const response = await api.get('products');

        const data = response.data.map(product => ({
          ...product,
          priceFormatted: formatPrice(product.price),
        }));

        setProductsList(data);
      } catch (err) {
        console.log(err);
      }
    }

    loadProducts();
  }, []);

  const handleAddProduct = product => {
    addToCart(product);
  };

  return (
    <ProductList>
      {productsList.map(product => (
        <li key={product.id}>
          <img src={product.image} alt={product.title} />
          <strong>{product.title}</strong>
          <span>{product.priceFormatted}</span>

          <button type="button" onClick={() => handleAddProduct(product)}>
            <div>
              <MdAddShoppingCart size={16} color="#fff" /> 3
            </div>

            <span>ADICIONAR AO CARINHO</span>
          </button>
        </li>
      ))}
    </ProductList>
  );
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(Home);
