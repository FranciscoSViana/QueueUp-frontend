#!/bin/bash

cd /var/www/
rm -rf html
mkdir html
cd QueueUp-frontend
git pull
npm run build
cp -r build/* ../html/.
