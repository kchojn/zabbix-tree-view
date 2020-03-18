import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import styles from "./styles"
import {AppBar} from '@material-ui/core';
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import SideMenu from "../SideMenu/SideMenu";
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import PropTypes from 'prop-types';

class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = {navBarIsOpen: false};
    }

    onClickToggleMenu() {
        this.setState({
            navBarIsOpen: !this.state.navBarIsOpen
        })

    }

    onCloseMenu() {
        this.setState({
            navBarIsOpen: false
        })
    }

    render() {
        const {classes, children} = this.props;
        const {navBarIsOpen} = this.state;
        return <div className={classes.root}>
            <CssBaseline/>
            <AppBar
                color="default"
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: navBarIsOpen,
                })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={this.onClickToggleMenu.bind(this)}
                        edge="start"
                        className={clsx(classes.menuButton, navBarIsOpen && classes.hide)}
                    >
                        <MenuIcon/>
                    </IconButton>
                </Toolbar>
            </AppBar>

            <SideMenu isOpen={navBarIsOpen} onClose={this.onCloseMenu.bind(this)}/>
            <main className={clsx(classes.content, {[classes.contentShift]: navBarIsOpen})}>
                {children}
            </main>
        </div>

    }

}

Layout.propTypes = {
    children: PropTypes.element.isRequired
};

export default withStyles(styles)(Layout);
