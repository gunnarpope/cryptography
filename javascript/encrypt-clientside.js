var CryptoJS = require("crypto-js");
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

// This data object could be any data in JSON format
var data = [{payer : 'bob'},
	          {payee : 'alice'},
            {date  : Date.now()},
	          {hours : 10},
            {payout : '100 HORUS'},
            {notes : 'Work contract completed.'}
          ]

console.log('This is the original data (non-encrypted).')
console.log(data)
// Encrypt the data packet

var ciphertext = CryptoJS.AES.encrypt(JSON.stringify(data), 'secret key 123').toString();
console.log('\nCiphertext:\n',ciphertext);

// get hash of the encrypted data packet
var hash = CryptoJS.SHA256(ciphertext).toString();
console.log('\nSHA256(ciphertext):\t',hash)

//TODO: store ciphertext locally - protected under 'secret key 123'

//TODO: get the public RSA key from the other client via blockchain

//TODO: encrypt data for client using their RSA key

//TODO: publish a hash of the sent data to the blockchain

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myobj = { edata: ciphertext,  sha256: hash};

  dbo.collection("customers").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted into Database");
    db.close();
  });
});


MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var query = { sha256: 'b520936709c01439b0b8477066e7838bde1bfc90193f793f9fd15b5a7e2e44d3' };
  dbo.collection("customers").find(query, { projection: { _id: 0, edata: 1, sha256: 1}}).toArray(function(err, result) {
    if (err) throw err;
    console.log("\nQuery Database for Ciphertext: ");
    console.log(result);

    console.log("\nReturn only the cipherdata: ");
    var cipherdata = result[0].edata;
    console.log(cipherdata);

    // Decrypt
    var bytes  = CryptoJS.AES.decrypt(cipherdata, 'secret key 123');
    var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

    console.log('\nThe decripted cipherdata is:')
    console.log(decryptedData)
    db.close();
  });
});

// OUTPUT
// ~/repos/Horuspay/horuspay-server/node $ node hp-server.js
// This is the original data (non-encrypted).
// [ { payer: 'bob' },//   { payee: 'alice' },//   { date: 1548039325192 },//   { hours: 10 },//   { payout: '100 HORUS' },//   { notes: 'Work contract completed.' } ]
//
// Ciphertext://  U2FsdGVkX1/MXEPCvfUe6de4FN3FjBpF0hF/xsul2ok6uvPsNi9BgRhF2ayDkw0ua63rU10CrbNm8nIq4+HimeDyE+1M6OWPzRpI+R+TYlzdvi5LiLR6J+1Bb6WN3cKQzvtFXD+ihVPi+d0PJyqAB1mcLaBvKxpzcx8LLoRAqacqRXjcxuzMTzTS4y2Y0J0+cXd6Q/aP33W0t185ZShSzw==
//
// SHA256(ciphertext):	 b22139f7b5d0596b9b3ea79ec04be268b6f500b4d9b7301eb677b66ddbd1b2b5
// (node:19978) DeprecationWarning: current URL string parser is deprecated, and will be removed in a future version. To use the new parser, pass option { useNewUrlParser: true } to MongoClient.connect.
// 1 document inserted
//
// Query Database for Ciphertext:
// [ { edata://      'U2FsdGVkX1+8Q8yizLW2OYxY6rnJYAcNEJVyQonZSPGLZsyGNY9qJifFD0oprB9BsgtRBQ9dSDcydnbyfFUCkZsWj6aZ2Hf1AcN8bN1HbS2ydgLWGehmBadxYIcch9KH/yOWlpnJQ9DB/KFxsoga+ZGsKS6UxkqwsaYef5Sk+8hoMcgDcuDw5fNKqEKfTtc5nYzgq08lUui2h4mObDVTAg==',//     sha256://      'b520936709c01439b0b8477066e7838bde1bfc90193f793f9fd15b5a7e2e44d3' } ]
//
// Return only the ciphertext:
// U2FsdGVkX1+8Q8yizLW2OYxY6rnJYAcNEJVyQonZSPGLZsyGNY9qJifFD0oprB9BsgtRBQ9dSDcydnbyfFUCkZsWj6aZ2Hf1AcN8bN1HbS2ydgLWGehmBadxYIcch9KH/yOWlpnJQ9DB/KFxsoga+ZGsKS6UxkqwsaYef5Sk+8hoMcgDcuDw5fNKqEKfTtc5nYzgq08lUui2h4mObDVTAg==
//
// The decripted data is:
// [ { payer: 'bob' },//   { payee: 'alice' },//   { date: 1548037567165 },//   { hours: 10 },//   { payout: '100 HORUS' },//   { notes: 'Work contract completed.' } ]
//
