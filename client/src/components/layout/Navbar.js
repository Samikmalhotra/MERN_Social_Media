import React, { Fragment } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom' 
import PropTypes from 'prop-types';
import {logout} from '../../actions/auth'

const Navbar = ({auth:{isAuthenticated, loading}, logout}) => {

  const authLinks = (
    <ul>
    <li>
        <a  href="/profiles">
          Students
        </a>
      </li>
      <li>
        <a  href="/posts">
          Posts
        </a>
      </li>
    <li>
        <a  href="/dashboard">
          <i className="fas fa-user" />{' '}
          <span className="hide-sm nav-link">Dashboard</span>
        </a>
      </li>
      <li>
        <a onClick={logout} href="#!">
          <i className="fas fa-sign-out-alt" />{' '}
          <span className="hide-sm nav-link">Logout</span>
        </a>
      </li>
      
    </ul>
  );

  const guestLinks = (
    <ul>
        <li><Link to="/profiles">Students</Link></li>
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/login">Login</Link></li>
    </ul>
  );

  return (
    <nav className="navbar bg-dark ">
      <h1>
        <Link to="/">
          <i className="fas fa-cubes" /> Axios Cube
        </Link>
      </h1>
      <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(Navbar);