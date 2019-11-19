import React from 'react';
import { Link } from 'react-router-dom';
import { MdShoppingBasket } from 'react-icons/md';

import { Container, Card } from './styles';

import logo from '../../assets/img/logo.svg';

export default function Header() {
  return (
    <Container>
      <Link to="/">
        <img src={logo} from="" alt="ReactShoes" />
      </Link>

      <Card to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span>3 itens</span>
        </div>
        <MdShoppingBasket size={36} color="#FFF" />
      </Card>
    </Container>
  );
}
