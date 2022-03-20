// Redux
import { combineReducers } from "redux";
//
// Reducers errors
import errors from './errors'
// Reducers messages
import messages from './messages'
// Reducers auth
import auth from './auth'


export default combineReducers({
    errors,
    messages,
    auth
});