import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from '../../firebase/firebase.utils';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import './header.styles.scss';


import { ReactComponent as Logo } from '../../assets/crown.svg';

const Header = ({ currentUser, hidden }) => {
  return (
    <div className="header">
      <Link className='logo-container' to='/'>
        <Logo className='logo' />
      </Link>
      <div className='options'>
        <Link to="/shop" className="option">SHOP</Link>
        <Link to="/CONTACT" className="option">CONTACT</Link>
        {
          currentUser ?
            <span className="option" onClick={() => auth.signOut()}> SIGNOUT </span>
            :
            <Link to="/signin" className="option">SIGNIN</Link>
        }
        <CartIcon />
      </div>
      {
        hidden ? null :
          <CartDropdown />
      }

    </div>
  );
}

const mapStateToProps = createStructuredSelector(
  {
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
  }
);

export default connect(mapStateToProps)(Header);