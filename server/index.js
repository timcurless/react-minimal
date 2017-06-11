/* eslint consistent-return:0 */
const express = require('express');
const logger = require('./logger');
const resolve = require('path').resolve;
const setup = require('./middlewares/frontendMiddleware');
const argv = require('minimist')(process.argv.slice(2));
const customHost = argv.host || process.env.HOST;
const host = customHost || null;
const prettyHost = customHost || 'localhost';
const port = argv.port || process.env.PORT || 3000;
const app = express();

setup(app, {
  outputPath: resolve(process.cwd(), 'build'),
  publicPath: '/',
});

app.listen(port, host, (err) => {
  if (err) {
    return logger.error(err.message);
  }

  logger.appStarted(port, prettyHost);
});
