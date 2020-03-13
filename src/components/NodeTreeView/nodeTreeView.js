import React, {Component} from 'react';
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import {withStyles} from '@material-ui/core/styles';
import styles from './styles';
import {TreeView} from "@material-ui/lab";
import {fetchingHosts} from '../../store/hosts/actions';
import {bindActionCreators} from 'redux';
import {connect} from "react-redux";
import ReplayIcon from '@material-ui/icons/Replay';
import IconButton from '@material-ui/core/IconButton';
import CircularProgress from '@material-ui/core/CircularProgress';
import {setIcon, StyledTreeItem} from "./styledTreeItems";


class NodeTreeView extends Component {


    componentDidMount() {
        this.props.actions.fetchingHosts();
    }


    handleOnClick() {
        this.props.actions.fetchingHosts();
    }

    createNodesData(lst) {
        const body = {id: 'root', name: 'Zabbix Events', children: []};
        body.children = lst;
        return body
    }


    renderTree(nodes) {
        return <StyledTreeItem key={nodes.id} nodeId={nodes.id} labelText={nodes.name} labelIcon={setIcon(nodes.id)}>
            {Array.isArray(nodes.children) ? nodes.children.map(node => this.renderTree(node)) : null}
        </StyledTreeItem>
    }

    render() {
        const {classes, hosts} = this.props;

        return (
            hosts.isFetching ? <CircularProgress classes={classes.spinner}/> :
                <div>
                    <IconButton color="primary" aria-label="refresh" onClick={this.handleOnClick.bind(this)}>
                        <ReplayIcon/>
                    </IconButton>
                    <TreeView
                        className={classes.root}
                        defaultExpanded={['3']}
                        defaultCollapseIcon={<ArrowDropDownIcon/>}
                        defaultExpandIcon={<ArrowRightIcon/>}
                        defaultEndIcon={<div style={{width: 24}}/>}
                    >
                        {
                            this.renderTree(this.createNodesData(hosts.hostNodes))
                        }

                    </TreeView>
                </div>

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
