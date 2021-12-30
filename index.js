#! /usr/bin/env node
const commandLineArgs = require('command-line-args');
const jsonExporter = require('./exporter/json');
const txtExporter = require('./exporter/txt');

const options = commandLineArgs([
	{ name: 'src', type: String, multiple: false, defaultOption: true },
	{ name: 'target', alias: 't', type: String, defaultValue: 'text' },
	{ name: 'output', alias: 'o', type: String, defaultValue: 'output.text' },
	{ name: 'help', alias: 'h', type: Boolean, defaultValue: false },
]);

let { help, src, target, output } = options;

if(help){
	console.log(`
  Usage:
    mytools <target-file>
    mytools <path error.log> -t <format output>
    mytools <path error.log> -o <path output>
    mytools <path error.log> -t <format output> -o <path output>

  Example:
    mytools /var/log/nginx/error.log
    mytools /var/log/nginx/error.log -t text
    mytools /var/log/nginx/error.log -t json
    mytools /var/log/nginx/error.log -o /User/johnmayer/Desktop/nginxlog.txt
    mytools /var/log/nginx/error.log -t json -o /User/johnmayer/Desktop/nginxlog.json
  
  Help:
    mytools -h or mytools --help
  `);
	process.exit();
}

const formatFile = src.split('.')[src.split('.').length-1];
if(!src || formatFile !== 'log'){
	console.log('unknown path or file format must be *log');
	process.exit();
}

if(target==='json'){
	output = output.split('.');
	output[output.length-1] = 'json';
  output = output.join('.');
	jsonExporter(src, output);
}else{
	output = output.split('.');
	output[output.length-1] = 'txt';
  output = output.join('.');
	txtExporter(src, output);
}

// console.log('========================== Options ==========================');
// console.log(options);