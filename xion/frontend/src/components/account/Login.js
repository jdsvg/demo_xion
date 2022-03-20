// React
import React, { Component } from 'react';

// React-Router
import { Link, Redirect } from 'react-router-dom';

// React-Redux
import { connect } from 'react-redux';

// PropTypes
import PropTypes from 'prop-types';

// PropTypes
import { login } from '../../actions/auth';

export class Login extends Component {

    state = {
        username: '',
        password: '',
    }

    static propTypes = {
        login: PropTypes.func.isRequired,
        isAuthenticated: PropTypes.bool,
    };



    onSubmit = (e) => {
        e.preventDefault();
        this.props.login(this.state.username, this.state.password)
    };

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    render() {
        if (this.props.isAuthenticated) {
            return <Redirect to="/" />
        }
        const { username, password } = this.state;
        return (
            <div>
                <h1 >LOGIN</h1>
                <form onSubmit={this.onSubmit} >
                    <label htmlFor="username" >Username</label>
                    <input type="text" name="username" onChange={this.onChange} value={username} />
                    <label htmlFor="password" >Password</label>
                    <input type="password" name="password" onChange={this.onChange} value={password} />
                    <button type="submit" >
                        Login
                    </button>
                </form>
            </div >
        );
    }
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);