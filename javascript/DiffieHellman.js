// Example found from https://nodejs.org/api/crypto.html

const crypto = require('crypto');
const assert = require('assert');

// Generate Alice's keys...
const alice = crypto.createDiffieHellman(2048);
const aliceKey = alice.generateKeys();

// Generate Bob's keys...
const bob = crypto.createDiffieHellman(alice.getPrime(), alice.getGenerator());
const bobKey = bob.generateKeys();

// Exchange and generate the secret...
const aliceSecret = alice.computeSecret(bobKey);
const bobSecret = bob.computeSecret(aliceKey);

// OK
assert.strictEqual(aliceSecret.toString('hex'), bobSecret.toString('hex'));

console.log('Alice\'s Public Key');
console.log(aliceKey);
console.log('Alice\'s Secret:');
console.log(aliceSecret);

console.log('Bob\'s Public Key');
console.log(bobKey);
console.log('Bob\'s Secret:');
console.log(bobSecret);

