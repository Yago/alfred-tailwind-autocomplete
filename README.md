# Alfred Tailwind Autocomplete

## Set your bash/zsh aliases

Something like:

```bash
twinit="/usr/local/bin/node /path/to/tailwind-autocomplete/init.js"
twhere="/usr/local/bin/node /path/to/tailwind-autocomplete/current.js"
```

## To setup/update project

```bash
$ cd path/to/project/with/tailwind_config_in_it
$ twinit
$ twhere
```

## For Alfred

Set a new workflow with bash script filter containing

```bash
query=$1

/usr/local/bin/node /path/to/tailwind-autocomplete/search.js $query
```