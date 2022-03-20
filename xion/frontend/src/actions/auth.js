// axios
import axios from "axios";
// messages
import { returnErrors } from "./errors";
// types
import {
    USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAIL
} from "./types";


export const loadUser = () => (dispatch, getState) => {
    dispatch({ type: USER_LOADING });
    axios
        .get('api/auth/user', tokenConfig(getState))
        .then((res) => {
            dispatch({
                type: USER_LOADED,
                payload: res.data,
            });
        })
        .catch((err) => {
            dispatch(returnErrors(err.response.data, err.response.status));
            dispatch({
                type: AUTH_ERROR,
            });
        });
};

// Loging
export const login = (username, password) => (dispatch) => {
    //Headers
    const config = {
        headers: {
            'Content-Type': 'application/json',
        }
    }
    const body = JSON.stringify({ username, password });
    axios
        .post('/api/auth/login', body, config)
        .then((res) => {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data,
            });
        })
        .catch((err) => {
            dispatch(returnErrors(err.response.data, err.response.status));
            dispatch({
                type: LOGIN_FAIL,
            });
        });
};

// Rigister
export const register = ({ username, password, email }) => (dispatch) => {

    //Headers
    const config = {
        headers: {
            'Content-Type': 'application/json',
        }
    }
    const body = JSON.stringify({ username, email, password });

    axios
        .post('/api/auth/register', body, config)
        .then((res) => {
            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data,
            });
        })
        .catch((err) => {
            dispatch(returnErrors(err.response.data, err.response.status));
            dispatch({
                type: REGISTER_FAIL,
            });
        });
};


// Logout
export const logout = () => (dispatch, getState) => {
    axios
        .post('/api/auth/logout', null, tokenConfig(getState))
        .then((res) => {
            dispatch({ type: 'CLEAR_LEADS' })
            dispatch({
                type: LOGOUT_SUCCESS,
            });
        })
        .catch((err) => {
            dispatch(returnErrors(err.response.data, err.response.status));
        });
};


//Setiando Token
export const tokenConfig = (getState) => {

    //Opteniendo Toen
    const token = getState().auth.token;

    // HEADERS
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    };
    // IF TOKEN, ADD TO HEADERS CONFIG
    if (token) {
        config.headers['Authorization'] = `Token ${token}`;
    }
    return config;
};