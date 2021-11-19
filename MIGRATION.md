# Migration Guide

## Migration to Version 7
Version 7 of the lp-subsection-generator introduced the following changes that may break existing usage of this command:
1. Version 7 of the lp-subsection-generator requires that a Node version >= Node 12 be installed.
1. The lp-subsection-generator argument `subsection-name` is now required. Previously, this argument was optional and would default to `sub-section`.
1. This version adds a new linked command, `generate-ionic-subsection` that was previously unavailable. This version of the command is for use with the [Ionic client template](https://github.com/LaunchPadLab/ionic-client-template)
