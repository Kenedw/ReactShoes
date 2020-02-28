import React, { useEffect, useState } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { useSelector, useDispatch } from 'react-redux';

import { ProductList } from './styles';
import api from '../../services/api';
import { formatPrice } from '../../util/format';
import * as CartActions from '../../store/models/cart/actions';

export default function Home() {
  const dispatch = useDispatch();

  const [productsList, setProductsList] = useState([]);

  const amount = useSelector(state =>
    state.cart.reduce((_amount, product) => {
      _amount[product.id] = product.amount;

      return _amount;
    }, {})
  );

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
    dispatch(CartActions.addToCartRequest(id));
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
