import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import styles from "./styles"
import NodeTreeView from "../../components/NodeTreeView/NodeTreeView";
import {Container, Grid} from '@material-ui/core';
import StatChart from "../../components/Charts/Charts";

class Alerts extends Component {
    render() {
        const {classes} = this.props;
        return <div className={classes.root}>
            <Container maxWidth={false}>
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <NodeTreeView/>
                    </Grid>
                    <Grid item xs={6}>
                        <StatChart/>
                    </Grid>
                </Grid>
            </Container>
        </div>

    }

}

export default withStyles(styles)(Alerts);

