
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
          script={[
            {innerHTML: `{
              (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
              (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
              m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
              })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

              ga('create', 'INSERT KEY HERE', 'auto');
              ga('send', 'pageview'); }`
            }
          ]}
          meta = {[
            {name: "theme-color", content: "#000"}
          ]}
        />
        { this.props.children }
      </div>
    );
  }
}