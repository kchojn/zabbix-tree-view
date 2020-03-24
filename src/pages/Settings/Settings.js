import  React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import styles from "./styles"
import AuthSettings from "../../components/Authentication/AuthenticationSettings";

class Settings extends Component {
    render() {
        const {classes} = this.props;
        return <div className={classes.root}>
            <AuthSettings/>
        </div>

    }

}

export default withStyles(styles)(Settings);
