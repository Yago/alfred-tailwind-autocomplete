# Alfred Tailwind Autocomplete

## Setup

```bash
$ git clone git@github.com:Yago/alfred-tailwind-autocomplete.git
$ cd alfred-tailwind-autocomplete
$ yarn
```

Set your bash/zsh aliases, something like:

```bash
twinit="/usr/local/bin/node /absolute/path/to/alfred-tailwind-autocomplete/init.js"
twhere="/usr/local/bin/node /absolute/path/to/alfred-tailwind-autocomplete/current.js"
```

## To setup/update project

```bash
$ cd path/to/project/with/tailwind_config_in_it
$ twinit
```

## To set current Tailwind project

```bash
$ twhere
```

## For Alfred

Set a new workflow with bash script filter containing

```bash
query=$1

/usr/local/bin/node /absolute/path/to/alfred-tailwind-autocomplete/search.js $query
```