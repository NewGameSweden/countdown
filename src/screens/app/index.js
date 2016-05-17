
// React Hot Reload does not support stateless function components as of now
/* eslint-disable react/prefer-stateless-function */
import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';

import styles from './style.scss';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  }

  render() {
    return (
      <div className={styles.main}>
        <Helmet
          link={[{
            rel: 'icon', href: '/faviconv2.png',
          }]}
        />
        { this.props.children }
      </div>
    );
  }
}