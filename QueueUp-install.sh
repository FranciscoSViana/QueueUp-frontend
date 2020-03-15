#!/bin/bash

cd /var/www/
rm -rf ../html
mkdir html
npm update
npm install -f node-sass
npm install
nodejs node_modules/node-sass/scripts/install.js
npm rebuild node-sass
npm run build
cp -r build/* ../html/.