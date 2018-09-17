var Trie = require('merkle-patricia-tree/secure');
var levelup = require('levelup');
var leveldown = require('leveldown');
var RLP = require('rlp');
var assert = require('assert');
var utils = require('ethereumjs-util');
var BN = utils.BN;
var Account = require('ethereumjs-account');


key value database
var db = levelup(leveldown('/home/ubuntu/gethDataDir/geth/chaindata'));

//Creating a trie object of the merkle-patricia-tree library
var trie = new Trie(db, '0x9fys785e3e9171715dd34123b047dffe44575c32ede59bde39fbf5dc074f2976');

//Creating a nodejs stream object so that we can access the data
var stream = trie.createReadStream()

stream.on('data', function (data){
  //printing out the keys of the "state trie"
  console.log(data.key);
});


trie.get("0x1236b46fa5606826ce8c18fece6f519064e612b2", function (err, raw) {
    if (err) return cb(err)
    //Using ethereumjs-account to create an instance of an account
    var account = new Account(raw)
    console.log('Account Address: ' + address);
    //Using ethereumjs-util to decode and present the account balance 
    console.log('Balance: ' + (new BN(account.balance)).toString());
})
