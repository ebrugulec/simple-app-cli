#!/usr/bin/env node

const chalk = require('chalk');
const shell = require('shelljs')
const clear = require('clear');
const figlet = require('figlet');

clear();

console.log(
  chalk.yellow(
    figlet.textSync('CheatSheet', { horizontalLayout: 'full' })
  )
)

const CLI = require('clui');
const Spinner = CLI.Spinner;

const status = new Spinner('Project is installing, please wait.');
status.start();

//Parent path
const folderPath = process.cwd().split("/").slice(0, -1).join("/")
shell.cd(folderPath)

//Clone repository
shell.exec('git clone https://github.com/ebrugulec/simple-app.git')
shell.cd('./simple-app')

//Download packages
shell.exec('npm i')

status.stop();

