const fs = require('fs-extra');
const tailwind = require('tailwindcss');
const postcss = require("postcss");
const css = require("css");


const keyword = process.argv[2];
const root = __dirname;
const path = process.cwd();
const slug = path.split('/').at(-1)?.toLowerCase() ?? 'unknown';

const { current } = require(`${root}/current.json`);
const db = require(`${root}/dbs/${current}.json`);

console.log(JSON.stringify({
  skipknowledge: true,
  items: db.filter(i => i.uid.includes(keyword))
}));


