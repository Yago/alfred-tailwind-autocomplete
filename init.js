const fs = require('fs-extra');
const tailwind = require('tailwindcss');
const postcss = require("postcss");
const css = require("css");


const root = __dirname;
const path = process.cwd();
const slug = path.split('/').at(-1)?.toLowerCase() ?? 'unknown';

const config = require(`${path}/tailwind.config.js`);

const sanitize = str => {
  if (str !== undefined) {
    const remRegex = /(\d*\.\d*rem|\d*rem)/gm;
    if (str.match(remRegex) !== null) {
      return [...str.matchAll(remRegex)]
        .reduce((acc, val) => (acc ?? val.input).replace(val[0], `${parseFloat(val[0]) * 16}px`), null);
    }
  }
  return str;
}

(async () => {
  const result = await postcss([
    tailwind({...config, safelist: [{ pattern: /./ }] }),
  ]).process(`@tailwind base;@tailwind components;@tailwind utilities;`, {
    from: undefined,
  });
  fs.writeJsonSync(
    `${root}/dbs/${slug}.json`,
    css
      .parse(result.css).stylesheet.rules
      .filter(i =>
        i.selectors !== null &&
        i.selectors?.length === 1 &&
        !i.selectors?.join('').includes(':')
      )
      .map(i => {
        const title = i.selectors.join('').replace('\\', '');
        const values = i.declarations
          .map(j => `${j.property}: ${sanitize(j.value)}`)
          .join('; ')
          .replace(/\s!important/gm, '');
        return {
          uid: `${title} ${values}`,
          title,
          subtitle: values,
          arg: title.replace(/^\./, ''),
        }
      }),
    { spaces: 2 }
  );

  console.log('Done!');
})();


