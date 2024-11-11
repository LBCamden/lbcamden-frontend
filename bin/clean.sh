#/bin/bash
set -eo pipefail

# ensure we're in the package root
stat package.json 2> /dev/null

rm -rf lbcamden dist
