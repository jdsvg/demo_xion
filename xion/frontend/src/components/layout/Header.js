// React
import React, { Component } from 'react';

// React-Router
import { Link } from 'react-router-dom';

// React-Redux
import { connect } from 'react-redux';

// PropTypes
import PropTypes from 'prop-types';

// Auth
import { logout } from '../../actions/auth';

class Header extends Component {

    static propTypes = {
        auth: PropTypes.object.isRequired,
        logout: PropTypes.func.isRequired
    };
    render() {
        const { isAuthenticated, user } = this.props.auth;
        const authLinks = (
            <div>
                <Link to="/"><button> <h1>Home</h1></button> </Link>
                <Link to="/login"><button onClick={this.props.logout}>Logout</button></Link>
            </div>
        );

        const guestLinks = (
            <div>
                <Link to="/login"><button> <h1>Login</h1></button></Link>
                <Link to="/register"><button> <h1>Register</h1></button></Link>
            </div>
        );

        return (
            <div >
                {isAuthenticated ? authLinks : guestLinks}
            </div>
        )
    }//render
}//Header

const mapStateToProps = (state) => ({
    auth: state.auth,
});
export default connect(mapStateToProps, { logout })(Header);