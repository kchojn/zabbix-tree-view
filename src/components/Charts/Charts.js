import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import styles from "./styles"
import {Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis} from 'recharts';
import {fetchingHosts} from '../../store/hosts/actions';
import {bindActionCreators} from 'redux';
import {connect} from "react-redux";

const data = [
    {
        name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
    },
    {
        name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
    },
    {
        name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
    },
    {
        name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
    },
    {
        name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
    },
    {
        name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
    },
    {
        name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
    },
];


class StackedChart extends Component {
    render() {
        const {classes} = this.props;
        return (
            <BarChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 20, right: 30, left: 20, bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis dataKey="name"/>
                <YAxis/>
                <Tooltip/>
                <Legend/>
                <Bar dataKey="pv" stackId="a" fill="#8884d8"/>
                <Bar dataKey="uv" stackId="a" fill="#82ca9d"/>
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
