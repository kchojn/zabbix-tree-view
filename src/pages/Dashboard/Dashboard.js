import  React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import styles from "./styles"
import Settings from "../../components/Authentication/AuthenticationSettings";

class Dashboard extends Component {
    render() {
        const {classes} = this.props;
        return <div className={classes.root}>
            <Settings/>
        </div>

    }

}

export default withStyles(styles)(Dashboard);
