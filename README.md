# lp-subsection-generator

Generate subsections for react-redux and Ionic apps.
Each subsection will contain components, forms, views and routes (see template folder for details).

Remember to include your generated subsection in your top-level reducer and routes files!

See the [Migration Guide](./MIGRATION.md) for information on migrating between lp-subsection-generator versions.

## Prerequisites
The following programs are required in order to run the subsection generator:
+ Node: `>= 12`
  + Download/upgrade using [nvm](https://github.com/nvm-sh/nvm)
+ Yarn: `^1.0.0`
  + Download via [homebrew](https://yarnpkg.com/en/docs/install)

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
