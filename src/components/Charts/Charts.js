import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import styles from "./styles"
import {Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis} from 'recharts';
import {fetchingHosts} from '../../store/hosts/actions';
import {bindActionCreators} from 'redux';
import {connect} from "react-redux";
import {SeverityMap} from "../../components/ZabbixApi/SeverityMap"
import CircularProgress from "@material-ui/core/CircularProgress";


class StackedChart extends Component {

    componentDidMount() {
        this.props.actions.fetchingHosts();
    }

    getData(dataSource) {
        const data = [];
        let element = {};
        dataSource.children.forEach(function (item) {
            if (item.children.length > 0) {
                element = {};
                element[item.name] = [];
                item.children.forEach(function (value) {
                    console.log();
                    element[item.name].push(value.severity)
                });
                data.push(element);
            }


        });
        return data
    }

    countOccurrences(dataSet, severity) {
        return dataSet.filter(i => i === severity.toString()).length
    }

    makeChartData(data) {
        console.log(data);
        const self = this;
        const chartData = [];
        this.getData(data).forEach(function (item) {
            let hostData = {};
            hostData.name = Object.keys(item)[0]; // push label name
            for (const key in SeverityMap) {
                hostData[SeverityMap[key]] = self.countOccurrences(item[Object.keys(item)[0]], key)
            }
            chartData.push(hostData)
        });
        return chartData
    }

    render() {
        const {classes, hosts} = this.props;
        let data = hosts.hostNodes;
        return (
            data ? <CircularProgress classes={classes.spinner}/>:
                <BarChart
                    width={500}
                    height={300}
                    data={this.makeChartData(data)}
                    margin={{
                        top: 20, right: 30, left: 20, bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3"/>
                    <XAxis dataKey="name"/>
                    <YAxis/>
                    <Tooltip/>
                    <Legend/>
                    <Bar dataKey="notClassified" stackId="a" fill="#97AAB3"/>
                    <Bar dataKey="information" stackId="a" fill="#00BFFF"/>
                    <Bar dataKey="warning" stackId="a" fill="#FFC859"/>
                    <Bar dataKey="average" stackId="a" fill="#FFA059"/>
                    <Bar dataKey="high" stackId="a" fill="#E97659"/>
                    <Bar dataKey="disaster" stackId="a" fill="#E45959"/>
                </BarChart>
        );

    }
}


const mapStateToProps = (state) => ({
    hosts: state.hosts
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators({fetchingHosts}, dispatch)
});


export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(StackedChart));
