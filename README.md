# lp-subsection-generator

Generate subsections for react-redux and Ionic apps.
Each subsection will contain components, forms, views and routes (see template folder for details).

Remember to include your generated subsection in your top-level reducer and routes files!

## Client Template Usage

You can run the `generate-subsection` command using `yarn`:
```
> yarn generate-subsection [options] [subsection-name] [destination]
```

### Arguments
  - `subsection-name`: the name of the subsection (required).
  - `destination`: the relative path to the directory where you'd like the subsection to be generated (optional, defaults to `./src/js/main/`).

### Options
  - `-V, --version`: the version number this utility
  - `-h, --help`: display help for command

## Ionic Client Template Usage

You can run the `generate-ionic-subsection` command using `yarn`:
```
> yarn generate-ionic-subsection [options] [subsection-name] [destination]
```

### Arguments
  - `subsection-name`: the name of the subsection (required).
  - `destination`: the relative path to the directory where you'd like the subsection to be generated (optional, defaults to `./src/js/main/`).

### Options
  - `-V, --version`: the version number this utility
  - `-h, --help`: display help for command
