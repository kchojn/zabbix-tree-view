import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from "@material-ui/core/styles";
import styles from "./styles"
import {Divider, Drawer, List, ListItem, ListItemIcon, ListItemText} from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import IconButton from '@material-ui/core/IconButton';
import {Link} from "react-router-dom";
import SettingsIcon from '@material-ui/icons/Settings';
import DashboardIcon from '@material-ui/icons/Dashboard';


class SideMenu extends Component {
    render() {
        const {classes, isOpen, onClose} = this.props;
        return (
            <Drawer
                className={classes.root}
                variant="persistent"
                anchor="left"
                color="default"
                open={isOpen}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={onClose}>
                        <ChevronLeftIcon/>
                    </IconButton>
                </div>
                <Divider/>
                <List className={classes.list}>
                    <Link to="/" onClick={onClose}>
                        <ListItem button>
                            <ListItemIcon>
                                <DashboardIcon/>
                            </ListItemIcon>
                            <ListItemText primary={"Dashboard"}/>
                        </ListItem>
                    </Link>
                    <Link to="/settings" onClick={onClose}>
                        <ListItem button>
                            <ListItemIcon>
                                <SettingsIcon/>
                            </ListItemIcon>
                            <ListItemText primary={"Settings"}/>
                        </ListItem>
                    </Link>
                </List>
                <Divider/>
            </Drawer>
        )

    }

}

SideMenu.propTypes = {
    isOpen: PropTypes.bool,
    onClose: PropTypes.func
};

SideMenu.defaultProps = {
    isOpen: false,
    onClose: () => {
    }
};


export default withStyles(styles)(SideMenu);
