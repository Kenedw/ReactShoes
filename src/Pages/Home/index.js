import React, { useEffect, useState } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { ProductList } from './styles';
import api from '../../services/api';
import { formatPrice } from '../../util/format';
import * as CartActions from '../../store/models/cart/actions';

function Home({ amount, addToCartRequest }) {
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
        // eslint-disable-next-line no-console
        console.trace(err);
      }
    }

    loadProducts();
  }, []);

  const handleAddProduct = id => {
    addToCartRequest(id);
  };

  return (
    <ProductList>
      {productsList.map(product => (
        <li key={product.id}>
          <img src={product.image} alt={product.title} />
          <strong>{product.title}</strong>
          <span>{product.priceFormatted}</span>

          <button type="button" onClick={() => handleAddProduct(product.id)}>
            <div>
              <MdAddShoppingCart size={16} color="#fff" />{' '}
              {amount[product.id] || 0}
            </div>

            <span>ADICIONAR AO CARINHO</span>
          </button>
        </li>
      ))}
    </ProductList>
  );
}
Home.propTypes = {
  amount: PropTypes.arrayOf(PropTypes.number).isRequired,
  addToCartRequest: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;

    return amount;
  }, []),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
