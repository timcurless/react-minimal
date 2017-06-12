// Main App Entrypoint

import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { applyRouterMiddleware, Router, browserHistory } from 'react-router';
import FontFaceObserver from 'fontfaceobserver';
import { useScroll } from 'react-router-scroll';
import 'sanitize.css/sanitize.css';

import App from 'containers/App';


/* eslint-disable import/no-webpack-loader-syntax */
import '!file-loader?name=[name].[ext]!./favicon.ico';
import '!file-loader?name=[name].[ext]!./manifest.json';
/* eslint-enable import/no-webpack-loader-syntax */

import './global-styles';

import createRoutes from './routes';

const openSansObserver = new FontFaceObserver('Open Sans', {});

openSansObserver.load().then(() => {
  document.body.classList.add('fontLoaded');
}, () => {
  document.body.classList.remove('fontLoaded');
});

const history = browserHistory;

const rootRoute = {
  component: App,
  childRoutes: createRoutes(),
};

ReactDOM.render(
  <Router
    history={history}
    routes={rootRoute}
    render={
      applyRouterMiddleware(useScroll())
    }
  />,
  document.getElementById('app')
);

if (process.env.NODE_ENV === 'production') {
  require('offline-plugin/runtime').install(); // eslint-disable-line global-require
}
