// React
import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
// 
// Redux
import { Provider } from 'react-redux';
import store from '../store';
// 
// Alerts
import { positions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import Alerts from './layout/Alerts'
// 
// Router
import { HashRouter as Router, Route, Switch, Redirect, Link } from 'react-router-dom';
// 
// Login y Register
import Login from './account/Login';
import Register from './account/Register';
// 
// PrivateRoute
import PrivateRoute from './common/PrivateRoute';
// 
// Actions auth
import { loadUser } from '../actions/auth';
// 
//-- Other components
// Header
import Header from './layout/Header';
// 
// Home
import Home from './Home';
//

// Allerts Options
const alertOptions = {
    position: positions.TOP_RIGHT,
    timeout: 3000
};


class App extends Component {

    componentDidMount() {
        store.dispatch(loadUser());
    }


    render() {
        return (
            <Provider store={store}>
                <AlertProvider template={AlertTemplate} {...alertOptions}>
                    <Router>
                        <Fragment>
                            <Header />
                            <Alerts />
                            <div >
                                <Switch>
                                    {/* Home */}
                                    <PrivateRoute exact path="/" component={Home} />

                                    {/* AUTH */}
                                    <Route exact path="/register" component={Register} />
                                    <Route exact path="/login" component={Login} />
                                </Switch>
                            </div>
                        </Fragment>
                    </Router>
                </AlertProvider>
            </Provider>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));