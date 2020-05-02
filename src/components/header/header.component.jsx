import React from 'react';
import { Link } from 'react-router-dom';
import crown from '../../assets/crown.svg';
import './header.styles.scss';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';

const Header = ({ currentUser }) => {
  return (
    <div className="header">
      <div className="logo">
        <img src={crown} alt="crown" />
      </div>
      <div>
        <Link to="/shop" className="quicklink">SHOP</Link>
        <Link to="/CONTACT" className="quicklink">CONTACT</Link>
        {
          currentUser ?
            <span className="quicklink" onClick={() => auth.signOut()}> SIGNOUT </span>
            :
            <Link to="/signin" className="quicklink">SIGNIN</Link>
        }
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { currentUser: state.user.currentUser };
}
export default connect(mapStateToProps)(Header);