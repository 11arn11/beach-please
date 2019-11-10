import React, { Component } from 'react';
import { FaUsers } from 'react-icons/fa';
import { Link } from '@reach/router';

class Navigation extends Component {
  render() {
    const { user, logOutUser } = this.props;

    return (
      <nav className="site-nav family-sans navbar navbar-expand bg-primary navbar-dark higher">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <FaUsers className="mr-1" /> Beach Please
          </Link>
          <div className="navbar-nav ml-auto">
              <Link className="nav-item nav-link" to="/competitions">
                search
              </Link>
            {user && (
              <Link className="nav-item nav-link" to="/admin/competitions">
                admin
              </Link>
            )}
            {!user && (
              <Link className="nav-item nav-link" to="/login">
                log in
              </Link>
            )}
            {!user && (
              <Link className="nav-item nav-link" to="/register">
                register
              </Link>
            )}
            {user && (
              <Link
                className="nav-item nav-link"
                to="/login"
                onClick={e => logOutUser(e)}
              >
                esci
              </Link>
            )}
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;
