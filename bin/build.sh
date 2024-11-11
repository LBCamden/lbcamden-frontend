#/bin/bash
set -eo pipefail

# ensure we're in the package root
stat package.json > /dev/null

bin/clean.sh

cp -r src/lbcamden lbcamden
rm -rf lbcamden/components/*/*.test.js
rm -rf lbcamden/*.test.js
rm -rf lbcamden/components/*/*.yaml
rm -rf lbcamden/lbcamden-frontend.js
bin/generate-fixtures.js
npx vite build
