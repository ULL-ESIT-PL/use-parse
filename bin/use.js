#!/usr/bin/env node
const path = require('path');
const [peg, input] = process.argv.splice(2);

const parse = require(path.join(process.cwd(),peg)).parse;
console.log(`Processing <${input}>`);
try {
  const r = parse(input);
  console.log(r);
} catch(e) {
  console.log(e.message)
}  

