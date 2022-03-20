// React
import React, { Component } from 'react';
// React-Router
import { Link, Redirect } from 'react-router-dom';
// React-Redux
import { connect } from 'react-redux';
// PropTypes
import PropTypes from 'prop-types';
// Auth
import { register } from '../../actions/auth';
// Actions messages
import { createMessage } from '../../actions/messages';

export class Register extends Component {

    state = {
        username: '',
        email: '',
        password: '',
        password2: '',
    }

    static propTypes = {
        register: PropTypes.func.isRequired,
        isAuthenticated: PropTypes.bool,
    };

    onSubmit = (e) => {
        e.preventDefault();
        const { username, email, password, password2 } = this.state;
        if (password !== password2) {
            this.props.createMessage({ passwordNotMatch: 'Reviza las constraseñas' })
        } else if (!email || !username || !password || !password2) {
            this.props.createMessage({ fieldlNotFound: 'Faltan campos llenar' })
        } else {
            const newUser = {
                username,
                password,
                email
            }
            this.props.register(newUser)
        }
    }
    onChange = (e) => this.setState({ [e.target.name]: e.target.value });
    render() {
        if (this.props.isAuthenticated) {
            return <Redirect to="/" />
        }
        const { username, email, password, password2 } = this.state;
        return (
            <div>
                <h1> REGISTER</h1>
                <form onSubmit={this.onSubmit} >
                    <input type="text" name="username" onChange={this.onChange} value={username} placeholder="username" />
                    <input type="text" name="email" onChange={this.onChange} value={email} placeholder="email" />
                    <input type="password" name="password" onChange={this.onChange} value={password} placeholder="password" />
                    <input type="password" name="password2" onChange={this.onChange} value={password2} placeholder="Confirma la password" />
                    <button type="submit" >
                        Register
                    </button>
                </form>
            </div >
        )
    }
}
const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps, { register, createMessage })(Register);