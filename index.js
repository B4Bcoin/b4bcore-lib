'use strict';

var b4bcore = module.exports;

// module information
b4bcore.version = 'v' + require('./package.json').version;
b4bcore.versionGuard = function(version) {
  if (version !== undefined) {
    var message = 'More than one instance of b4bcore-lib found. ' +
      'Please make sure to require b4bcore-lib and check that submodules do' +
      ' not also include their own b4bcore-lib dependency.';
    throw new Error(message);
  }
};
b4bcore.versionGuard(global._b4bcore);
global._b4bcore = b4bcore.version;

// crypto
b4bcore.crypto = {};
b4bcore.crypto.BN = require('./lib/crypto/bn');
b4bcore.crypto.ECDSA = require('./lib/crypto/ecdsa');
b4bcore.crypto.Hash = require('./lib/crypto/hash');
b4bcore.crypto.Random = require('./lib/crypto/random');
b4bcore.crypto.Point = require('./lib/crypto/point');
b4bcore.crypto.Signature = require('./lib/crypto/signature');

// encoding
b4bcore.encoding = {};
b4bcore.encoding.Base58 = require('./lib/encoding/base58');
b4bcore.encoding.Base58Check = require('./lib/encoding/base58check');
b4bcore.encoding.BufferReader = require('./lib/encoding/bufferreader');
b4bcore.encoding.BufferWriter = require('./lib/encoding/bufferwriter');
b4bcore.encoding.Varint = require('./lib/encoding/varint');

// utilities
b4bcore.util = {};
b4bcore.util.buffer = require('./lib/util/buffer');
b4bcore.util.js = require('./lib/util/js');
b4bcore.util.preconditions = require('./lib/util/preconditions');

// errors thrown by the library
b4bcore.errors = require('./lib/errors');

// main b4bcoin library
b4bcore.Address = require('./lib/address');
b4bcore.Asset = require('./lib/asset');
b4bcore.Block = require('./lib/block');
b4bcore.MerkleBlock = require('./lib/block/merkleblock');
b4bcore.BlockHeader = require('./lib/block/blockheader');
b4bcore.HDPrivateKey = require('./lib/hdprivatekey.js');
b4bcore.HDPublicKey = require('./lib/hdpublickey.js');
b4bcore.Networks = require('./lib/networks');
b4bcore.Opcode = require('./lib/opcode');
b4bcore.PrivateKey = require('./lib/privatekey');
b4bcore.PublicKey = require('./lib/publickey');
b4bcore.Script = require('./lib/script');
b4bcore.Transaction = require('./lib/transaction');
b4bcore.URI = require('./lib/uri');
b4bcore.Unit = require('./lib/unit');

// Insight-related
// use XMLHttpRequest in browser window if available, otherwise use wrapper
// this is to satisfy browser-request which looks for it in global scope
var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
if (typeof window !== 'undefined' && typeof window.XMLHttpRequest === 'function') {
  // console.log("XMLHttpRequest is available in window");
} else {
  // console.log("setting XMLHttpRequest in global");
  global.XMLHttpRequest = XMLHttpRequest;
}
b4bcore.Insight = require('./lib/insight');

// dependencies, subject to change
b4bcore.deps = {};
b4bcore.deps.bnjs = require('bn.js');
b4bcore.deps.bs58 = require('bs58');
b4bcore.deps.Buffer = Buffer;
b4bcore.deps.elliptic = require('elliptic');
// this may be undefined -- no x16r available to browser bundle
b4bcore.deps.nodeX16r = require('@B4Bcoin/node-x16r');
b4bcore.deps._ = require('lodash');

// Internal usage, exposed for testing/advanced tweaking
b4bcore.Transaction.sighash = require('./lib/transaction/sighash');
