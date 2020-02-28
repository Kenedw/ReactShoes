import React from 'react';
import { Link } from 'react-router-dom';
import { MdShoppingBasket } from 'react-icons/md';
import { useSelector } from 'react-redux';

import { Container, Card } from './styles';

import logo from '../../assets/img/logo.svg';

export default function Header() {
  const cartSize = useSelector(state =>
    state.cart.reduce((amount, product) => amount + product.amount, 0)
  );

  return (
    <Container>
      <Link to="/">
        <img src={logo} from="" alt="ReactShoes" />
      </Link>

      <Card to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span>{cartSize} itens</span>
        </div>
        <MdShoppingBasket size={36} color="#FFF" />
      </Card>
    </Container>
  );
}
