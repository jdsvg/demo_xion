// React
import React, { Component, Fragment } from 'react';
//
// Redux
import { connect } from 'react-redux';
//
// PropTypes
import PropTypes from 'prop-types';
//
// Alerts Library
import { withAlert } from 'react-alert';

export class Alerts extends Component {

    static propTypes = {
        error: PropTypes.object.isRequired,
        message: PropTypes.object.isRequired
    }

    componentDidUpdate(prevProps) {
        const { error, alert, message } = this.props;
        //
        //Gestiona los errores
        // 
        if (error !== prevProps.error) {
            // AUTH
            if ( error.msg.username) alert.error("Reviza el usuario");
            if ( error.msg.password) alert.error("Reviza la Contraseña");
            // .....
        }//error 

         //Gestiona los messages
        // 
        if (message !== prevProps.message) {
            // AUTH
            // Register
            if ( message.passwordNotMatch) alert.info(message.passwordNotMatch);
            if ( message.fieldlNotFound ) alert.info(message.fieldlNotFound);
        }//message 

    }//componentDidUpdate
    render() {
        return (
            <Fragment />
        )
    }
}

const mapStateToProps = state => ({
    error: state.errors,
    message: state.messages
})

export default connect(mapStateToProps)(withAlert()(Alerts));
