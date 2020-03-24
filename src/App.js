import React, {Component} from 'react';
import styles from './styles';
import {withStyles} from '@material-ui/core/styles';
import {Provider} from 'react-redux';
import store from './store';
import Dashboard from "./pages/Dashboard/Dashboard";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Alerts from "./pages/Alerts/Alerts";


class App extends Component {
    render() {
        const {classes} = this.props;

        return (
            <Provider store={store}>
                <div className={`App ${classes.root}`}>
                    <Router>
                        <Layout>
                            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                            <Switch>
                                <Route path="/alerts">
                                    <Alerts/>
                                </Route>
                                <Route path="/">
                                    <Dashboard/>
                                </Route>
                            </Switch>
                        </Layout>
                    </Router>
                </div>
            </Provider>


        );
    }
}

export default withStyles(styles)(App);
