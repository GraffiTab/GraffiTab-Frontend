#!/bin/bash

# Increase file descriptor limit on OSX.
# ulimit -n 2560

# install dependencies
npm i

# set path for binaries of node modules
PATH=node_modules/.bin:$PATH
export PATH

gulp
