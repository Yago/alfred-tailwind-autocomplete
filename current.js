const fs = require('fs-extra');
const tailwind = require('tailwindcss');
const postcss = require("postcss");
const css = require("css");


const root = __dirname;
const path = process.cwd();
const slug = path.split('/').at(-1)?.toLowerCase() ?? 'unknown';

fs.writeJsonSync(
  `${root}/current.json`,
  {current: slug}
);


