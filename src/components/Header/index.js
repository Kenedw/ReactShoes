import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { MdShoppingBasket } from 'react-icons/md';
import { connect } from 'react-redux';

import { Container, Card } from './styles';

import logo from '../../assets/img/logo.svg';

function Header({ cartSize }) {
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

Header.propTypes = {
  cartSize: PropTypes.number,
};

Header.defaultProps = {
  cartSize: 0,
};

export default connect(state => ({
  cartSize: state.cart.length,
}))(Header);
