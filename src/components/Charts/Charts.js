import React, {Component} from 'react';
import {withStyles} from "@material-ui/core/styles";
import styles from "./styles"
import {YAxis, Line, LineChart, Tooltip, XAxis} from 'recharts';

const data01 = [
  { day: '05-01', weather: 'sunny' },
  { day: '05-02', weather: 'sunny' },
  { day: '05-03', weather: 'cloudy' },
  { day: '05-04', weather: 'rain' },
  { day: '05-05', weather: 'rain' },
  { day: '05-06', weather: 'cloudy' },
  { day: '05-07', weather: 'cloudy' },
  { day: '05-08', weather: 'sunny' },
  { day: '05-09', weather: 'sunny' },
];


class StatChart extends Component {
    render() {
        const {classes} = this.props;
        return <div className={classes.root}>
 <LineChart
            width={400} height={400} data={data01}
            margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
            <XAxis dataKey="day" />
            <YAxis type="category" />
            <Tooltip />
            <Line type="stepAfter" dataKey="weather" stroke="#ff7300" />
          </LineChart>
        </div>

    }

}

export default withStyles(styles)(StatChart);
