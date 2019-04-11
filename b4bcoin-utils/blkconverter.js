'use strict';

// execution
// enable rest in b4b.conf 'rest=1' (be sure to disable after)
// node ./b4bcoin-utils/blkconverter.js

// convert block json from b4bd format to b4bcore format

// get ./b4bcoin-utils/inputs/blk220909.dat by:
// curl 127.0.0.1:8766/rest/block/000000000001a87be937e85123bf209af485cf94b6cae8125dce2f5a9914ecfb.hex | xxd -r -p > ./b4bcoin-utils/inputs/blk220909.dat

// get ./b4bcoin-utils/inputs/blk220909.json by
// curl 127.0.0.1:8766/rest/block/000000000001a87be937e85123bf209af485cf94b6cae8125dce2f5a9914ecfb.json > ./b4bcoin-utils/inputs/blk220909.json

// get ./b4bcoin-utils/inputs/blk220909.js by manually edit the file

// Manually check if blk220909-b4bcore.json match with blk220909.json

var b4bcore = require('..');
var Block = b4bcore.Block;
var fs = require('fs');

var first8Bytes = new Buffer ([0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF]); // won't be used in block allocation, just fill with some inane values

var blockBuffer = fs.readFileSync('b4bcoin-utils/inputs/blk220909.dat');

var b4bcoreFormatBlockBuffer = Buffer.concat([first8Bytes, blockBuffer]);

var blk = Block.fromRawBlock(b4bcoreFormatBlockBuffer);

var blkJSON = blk.toJSON();
var blkJSONStr = JSON.stringify(blkJSON, null, 2);

fs.writeFileSync('b4bcoin-utils/outputs/blk220909-b4bcore.dat', b4bcoreFormatBlockBuffer);
fs.writeFileSync('b4bcoin-utils/outputs/blk220909-b4bcore.json', blkJSONStr);
