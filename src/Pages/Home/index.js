import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/camisa-flamengo-samuca-n10-masculina/28/D40-1284-028/D40-1284-028_detalhe1.jpg"
          alt="samuca"
        />
        <strong>Samuca</strong>
        <span>R$ 123,00</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>

          <span>ADICIONAR AO CARINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/camisa-flamengo-samuca-n10-masculina/28/D40-1284-028/D40-1284-028_detalhe1.jpg?resize=280:280"
          alt="samuca"
        />
        <strong>Samuca</strong>
        <span>R$ 123,00</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>

          <span>ADICIONAR AO CARINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/camisa-flamengo-samuca-n10-masculina/28/D40-1284-028/D40-1284-028_detalhe1.jpg?resize=280:280"
          alt="samuca"
        />
        <strong>Samuca</strong>
        <span>R$ 123,00</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>

          <span>ADICIONAR AO CARINHO</span>
        </button>
      </li>
    </ProductList>
  );
}
