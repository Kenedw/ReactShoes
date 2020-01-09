import React, { useEffect, useState } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { connect, useDispatch } from 'react-redux';

import { ProductList } from './styles';
import api from '../../services/api';
import { formatPrice } from '../../util/format';

function Home() {
  const [productsList, setProductsList] = useState([]);
  const dispatch = useDispatch();

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
    dispatch({
      type: 'ADD_TO_CART',
      product,
    });
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

export default connect()(Home);
