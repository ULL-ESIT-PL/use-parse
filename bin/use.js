#!/usr/bin/env node
const path = require('path');
let [peg, input, method] = process.argv.splice(2);

if (!method) method = "parse";

const parse = require(path.join(process.cwd(),peg))[method];
console.log(`Processing <${input}>`);
try {
  const r = parse(input);
  console.log(r);
} catch(e) {
  console.log(e.message)
}  

