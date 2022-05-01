/**
 * Copy static assets witch are uesd by index.html. this should be run before webpack build.
 * For unknown reasons file-loader cannot recognize and extract images from html files.
 */
const fs = require('fs-extra');
const path = require('path');
const process = require('process');

try {
    fs.copySync(path.join(__dirname, '../src/renderer/assets'), path.join(__dirname, '../dist/renderer/static'));
    process.exit(0);
} catch (err) {
    process.exit(1);
}
