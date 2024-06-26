# Migration Guide

## Migration to Version ^7.0.0
Version 7 of the lp-subsection-generator introduced the following changes that may break existing usage of this command:
1. Version 7 of the lp-subsection-generator requires that a Node version >= Node 12 be installed.
1. The lp-subsection-generator argument `subsection-name` is now required. Previously, this argument was optional and would default to `sub-section`.

## Migration to Version ^8.0.0
Version 8 requires `@reduxjs/toolkit`, which is now standard across LPL's client templates.

## Migration to Version ^9.0.0
Version 9 requires major upgrades for two peer dependencies: `@reduxjs/toolkit@^2.2.1` and `redux@^5.0.1`. Refer to the [Migrating to RTK 2.0 and Redux 5.0 documentation](https://redux-toolkit.js.org/usage/migrating-rtk-2) for more details.

## Migration to Version ^10.0.0
Version 10 is built on the premise of supporting the Vite-based version of the client-template. The ionic-client-template has not yet been migrated to Vite, so the files that are output are still based on the existing Webpack-based setup. If you plan on using this with a non-ionic project, ensure that you are using at least `v14` of https://github.com/LaunchPadLab/client-template.