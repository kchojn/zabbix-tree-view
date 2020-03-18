import React, {Component} from 'react';
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import {withStyles} from '@material-ui/core/styles';
import styles from './styles';
import {TreeView} from "@material-ui/lab";
import {fetchingHosts} from '../../store/hosts/actions';
import {bindActionCreators} from 'redux';
import {connect} from "react-redux";
import CircularProgress from '@material-ui/core/CircularProgress';
import {setIcon, StyledTreeItem} from "./styledTreeItems";
import {Card, CardContent, CardHeader} from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import ReplayIcon from '@material-ui/icons/Replay';
import {ReactComponent as ZabbixIcon} from "../../images/zabbix_icon.svg";


class NodeTreeView extends Component {


    componentDidMount() {
        this.props.actions.fetchingHosts();
    }


    handleOnClick() {
        this.props.actions.fetchingHosts();
    }

    renderTree(nodes) {
        return <StyledTreeItem key={nodes.id} nodeId={nodes.id} labelText={nodes.name}
                               labelIcon={setIcon(nodes.id, nodes.children ? nodes.children.length : 0)}>
            {Array.isArray(nodes.children) ? nodes.children.map(node => this.renderTree(node)) : null}
        </StyledTreeItem>
    }

    render() {
        const {classes, hosts} = this.props;

        return (
            hosts.isFetching ? <CircularProgress classes={classes.spinner}/> :
                <Card className={classes.root}>
                    <CardHeader
                        avatar={
                            <Avatar aria-label="zabbix" className={classes.avatar}>
                                <ZabbixIcon/>
                            </Avatar>
                        }
                        action={
                            <IconButton color="inherit" aria-label="refresh" onClick={this.handleOnClick.bind(this)}>
                                <ReplayIcon/>
                            </IconButton>}
                    />
                    <CardContent>
                        <TreeView
                            className={classes.root}
                            defaultExpanded={['3']}
                            defaultCollapseIcon={<ArrowDropDownIcon/>}
                            defaultExpandIcon={<ArrowRightIcon/>}
                            defaultEndIcon={<div style={{width: 24}}/>}
                        >
                            {
                                this.renderTree(hosts.hostNodes)
                            }

                        </TreeView>
                    </CardContent>
                </Card>

        )
    }
}

const mapStateToProps = (state) => ({
    hosts: state.hosts
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators({fetchingHosts}, dispatch)
});


export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(NodeTreeView));
