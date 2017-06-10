const express = require('express');
const logger = require('./logger');
const argv = require('minimist')(process.argv.slice(2));
const customHost = argv.host || process.env.HOST;
const host = customHost || null;
const prettyHost = customHost || 'localhost';
const port = argv.port || process.env.PORT || 3000;
const app = express();

app.listen(port, host, (err) => {
  if (err) {
    return logger.error(err.message);
  }

  logger.appStarted(port, prettyHost);
});
