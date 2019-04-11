'use strict';

// execution
// enable rest in b4b.conf 'rest=1' (be sure to disable after)
// node ./b4bcoin-utils/blkconverter1.js

// convert block json from b4bd format to b4bcore format

// get ./b4bcoin-utils/inputs/blk220909.dat by:
// curl 127.0.0.1:8766/rest/block/00000058bcc33dea08b53691edb9e49a9eb8bac36a0db17eb5a7588860b1f590.hex | xxd -r -p > ./b4bcoin-utils/inputs/blk1.dat

// get ./b4bcoin-utils/inputs/blk220909.json by
// curl 127.0.0.1:8766/rest/block/00000058bcc33dea08b53691edb9e49a9eb8bac36a0db17eb5a7588860b1f590.json > ./b4bcoin-utils/inputs/blk1.json

// get ./b4bcoin-utils/inputs/blk1.js by manually edit the file

// Manually check if blk1-b4bcore.json match with blk1.json

var b4bcore = require('..');
var Block = b4bcore.Block;
var fs = require('fs');

var first8Bytes = new Buffer ([0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF]); // won't be used in block allocation, just fill with some inane values

var blockBuffer = fs.readFileSync('b4bcoin-utils/inputs/blk1.dat');

var b4bcoreFormatBlockBuffer = Buffer.concat([first8Bytes, blockBuffer]);

var blk = Block.fromRawBlock(b4bcoreFormatBlockBuffer);

var blkJSON = blk.toJSON();
var blkJSONStr = JSON.stringify(blkJSON, null, 2);

fs.writeFileSync('b4bcoin-utils/outputs/blk1-b4bcore.dat', b4bcoreFormatBlockBuffer);
fs.writeFileSync('b4bcoin-utils/outputs/blk1-b4bcore.json', blkJSONStr);
