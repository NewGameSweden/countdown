import React from 'react';
import styles from './style.scss';

export default class Countdown extends React.Component {
  constructor(props) {
    super(props);
    var start = new Date("2016-06-06 20:00:00").getTime();
    var end = new Date("2016-06-07").getTime();
    var current = new Date().getTime();
    var time = this.setTime(start, current);
    this.state = {
      currentTime: current,
      start: start,
      end: end,
      daysLeft: time[0],
      hoursLeft: time[1],
      minutesLeft: time[2],
      secondsLeft: time[3],
    };
    this.setTime = this.setTime.bind(this);
    this.tick = this.tick.bind(this);
    this.format = this.format.bind(this);
  }
  render() {
    var { currentTime, end, daysLeft, hoursLeft, 
        minutesLeft, secondsLeft} = this.state;
    var out, date;
    if (daysLeft < 0 || hoursLeft < 0 || minutesLeft < 0 || secondsLeft < 0) {
      out = "";
      date = "";
    } else {
      out = this.format(daysLeft) + ":" + this.format(hoursLeft) + ":" +
      this.format(minutesLeft) + ":" + this.format(secondsLeft);
      date = "160606 20:00";
    }
    return (
      <div className={styles.main}>
        <h3>{out}</h3>
        <h4>{date}</h4>
      </div>
    );
  }
  setTime(start, currTime) {
    var time = start - currTime;
    var days = Math.floor(time/(86400000));
    time -= days*86400000;
    var hours = Math.floor(time/(3600000));
    time -= hours*3600000;
    var minutes = Math.floor(time/(60000));
    time -= minutes*60000;
    var seconds = Math.floor(time/(1000));
    return [days, hours, minutes, seconds];
  }
  tick() {
    var { currentTime, daysLeft, hoursLeft, minutesLeft,
      secondsLeft, start } = this.state;
    this.setState({secondsLeft: secondsLeft - 1});
    if (this.state.secondsLeft < 0){
      this.setState({secondsLeft: 59, minutesLeft: minutesLeft - 1});
      if (this.state.minutesLeft < 0){
        this.setState({minutesLeft: 59, hoursLeft: hoursLeft - 1});
        if (this.state.hoursLeft < 0){
          this.setState({hoursLeft: 23, daysLeft: daysLeft - 1});
        }
      }
    } 
  }
  componentDidMount() {
    this.interval = setInterval(this.tick, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  format(number) {
    if(number < 10 && number >= 0) {
      return ("0"+number.toString());
    }
    return (number);
  }
}