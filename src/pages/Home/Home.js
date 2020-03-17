import  React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import styles from "./styles"

class Home extends Component {
    render() {
        const {classes} = this.props;
        return <div className={classes.root}>
            Home
        </div>

    }

}

export default withStyles(styles)(Home);
