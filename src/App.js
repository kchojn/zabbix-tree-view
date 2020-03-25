import React, {Component} from 'react';
import styles from './styles';
import {createMuiTheme, ThemeProvider, withStyles} from '@material-ui/core/styles';
import {Provider} from 'react-redux';
import store from './store';
import Dashboard from "./pages/Dashboard/Dashboard";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Settings from "./pages/Settings/Settings";


const theme = {
    dark: createMuiTheme({palette: {type: 'dark'}}),
    light: createMuiTheme({palette: {type: 'light'}})
};

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            theme: 'light'
        }
    }

    /* Toggle Theme type */
    onToggleTheme() {
        const {theme} = this.state;
        this.setState({
            theme: theme === 'light' ? 'dark' : 'light'
        })
    }

    render() {
        const {classes} = this.props;

        return (
            <Provider store={store}>
                <ThemeProvider theme={theme[this.state.theme]}>
                    <div className={`App ${classes.root}`}>
                        <Router>
                            <Layout onChangeTheme={this.onToggleTheme.bind(this)} themeType={this.state.theme}>
                                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                                <Switch>
                                    <Route path="/settings">
                                        <Settings/>
                                    </Route>
                                    <Route path="/">
                                        <Dashboard/>
                                    </Route>
                                </Switch>
                            </Layout>
                        </Router>
                    </div>
                </ThemeProvider>
            </Provider>


        );
    }
}

export default withStyles(styles)(App);
