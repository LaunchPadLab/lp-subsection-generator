# lp-subsection-generator

Generate subsections for react-redux apps.
Each subsection will contain components, forms, views and routes (see template folder for details).

Remember to include your generated subsection in your top-level reducer and routes files!

## Usage

You can run the `generate-subsection` command using `yarn`:
```
> yarn generate-subsection [subsection-name] [path]
```

The `path` option should be the path to the directory where you'd like the subsection to be generated (optional, default=`./src/js/main/`).
