# Migration Guide

## Migration to Version ^8.0.0
Version 8 introduces major updates of several libraries:
- `commander`
- `fs-extra`. This update fixes an issue where the `Layout.js` filename was being changed after a copy. This library is highly dependent on the Node version and was very out-of-date with respect to the current versions of Node, which  corrected this issue.
- `glob`
- `pluralize`

There should should be no manual migration required by the user due to these changes.

## Migration to Version ^7.0.0
Version 7 of the lp-subsection-generator introduced the following changes that may break existing usage of this command:
1. Version 7 of the lp-subsection-generator requires that a Node version >= Node 12 be installed.
1. The lp-subsection-generator argument `subsection-name` is now required. Previously, this argument was optional and would default to `sub-section`.

