#!/bin/bash

INCLUDES=`dirname $0`/includes
    
function process {
    OUTPUT=`dirname "$1"`/`basename "$1" .phtml`.html

    echo "Processing $1 to $OUTPUT"

    gcc -I$INCLUDES -E -P -C -xc "$1" > $OUTPUT
}

ROOTDIR=`dirname $0`

for file in `find ${ROOTDIR} -name '*.phtml'`; do
    process $file
done