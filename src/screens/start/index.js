// React Hot Reload does not support stateless function components as of now
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import Countdown from '../../components/countdown/index.js'

import styles from './style.scss';

export default class Start extends Component {
  render() {
    return (
        <div className={styles.main}>
    			<div className={styles.tint}></div>
         	<Countdown />
         	<img className={styles.image} src="/logo-white-text.png" />
        </div>
    );
  }
}
