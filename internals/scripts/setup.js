#!/usr/bin/env node

'use strict';

const exec = require('child_process').exec;
const readline = require('readline');
const animateProgress = require('./helpers/progress');
const addCheckMark = require('./helpers/checkmark');

process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdout.write('\n');
let interval = animateProgress('Beginning setup process.');

setup(function () {
  clearInterval(interval);
  process.stdout.write('\nInstalling dependencies... (This may take a while)');
  setTimeout(function () {
    readline.cursorTo(process.stdout, 0);
    interval = animateProgress('Installing dependencies');
  }, 500);

  installDeps();
});

function setup(callback) {
  addCheckMark(callback);
}

function installDeps() {
  exec('node --version', function (err, stdout, stderr) {
    const nodeVersion = stdout && parseFloat(stdout.substring(1));
    if (nodeVersion < 5 || err) {
      installDepsCallback(err || 'Unsupported node.js version, please make sure you have the latest version installed.');
    } else {
      exec('yarn --version', function (err, stdout, stderr) {
        if (parseFloat(stdout) < 0.15 || err || process.env.USE_YARN === 'false' ) {
          exec('npm install', addCheckMark.bind(null, installDepsCallback));
        } else {
          exec('yarn install', addCheckMark.bind(null, installDepsCallback));
        }
      });
    }
  });
}

function installDepsCallback(error) {
  clearInterval(interval);
  process.stdout.write('\n\n');
  if (error) {
    process.stderr.write(error);
    process.stdout.write('\n');
    process.exit(1);
  } else {
    clearInterval(interval);
    process.stdout.write('\nDone!');
    process.exit(0);
  }
}
