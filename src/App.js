import React, {Component} from 'react';
import './css/App.css';
import styles from './styles';
import {withStyles} from '@material-ui/core/styles';
import NodeTreeView from './components/NodeTreeView/nodeTreeView';
import {Provider} from 'react-redux';
import store from './store';

class App extends Component {
    render() {
        const {classes} = this.props;

        return (
            <Provider store={store}>
                <div className={`App ${classes.root}`}>
                    <header className={`App-header ${classes.header}`}>
                        <NodeTreeView/>
                    </header>
                </div>
            </Provider>


        );
    }
}

export default withStyles(styles)(App);
