#!/usr/bin/env node

'use strict';

let fs = require('fs')
  , program = require('commander')
  , config = require('./package.json');

let templates = {
  base: './templates/base.js'
}

program
  .version(config.version)
  .usage('[options] <file>')
  .parse(process.argv);

let args = program.args;

if (args.length === 0) program.help();

for (let i = 0; i < args.length; i++) {
  ((i) => {
    fs.access(args[i], fs.F_OK, () => {
      let readStream = fs.createReadStream(templates.base)
                            .on('error', (err) => { console.log(err); })
      let writeStream = fs.createWriteStream(args[i])
                            .on('error', (err) => { console.log(err); })
      readStream.pipe(writeStream);
    });
  })(i);
}