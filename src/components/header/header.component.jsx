import React from 'react';
import { Link } from 'react-router-dom';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import './header.styles.scss';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
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

const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => {
  return { 
    currentUser,
    hidden
  };
}
export default connect(mapStateToProps)(Header);