# lp-subsection-generator

Generate subsections for react-redux apps.
Each subsection will contain components, forms, views and routes (see template folder for details).

Remember to include your generated subsection in your top-level reducer and routes files!

## Usage

You can run the `generate-subsection` command using `yarn`:
```
> yarn generate-subsection [options] [subsection-name] [destination]
```

### Arguments
  - `subsection-name`: the name of the subsection (optional, defaults to 'sub-section').
  - `destination`: the relative path to the directory where you'd like the subsection to be generated (optional, defaults to `./src/js/main/`).

### Options
  - `-V, --version`: the version number this utility
  - `-t, --template-type <client | ionic>`: the subsection template type (default: "client")
  - `-h, --help`: display help for command
