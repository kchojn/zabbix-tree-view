import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from "@material-ui/core/styles";
import styles from "./styles"
import {Divider, Drawer, List, ListItem, ListItemIcon, ListItemText} from '@material-ui/core';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import IconButton from '@material-ui/core/IconButton';
import {Link} from "react-router-dom";

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
                                <InboxIcon/>
                            </ListItemIcon>
                            <ListItemText primary={"Dashboard"}/>
                        </ListItem>
                    </Link>
                    <Link to="/alerts" onClick={onClose}>
                        <ListItem button>
                            <ListItemIcon>
                                <InboxIcon/>
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
