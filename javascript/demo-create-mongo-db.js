var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost/mydb";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var myobj = { name: "Company Inc", address: "Highway 37" };  
	//  dbo.createCollection("customers", function(err, res) {
  dbo.collection("customers").insertOne(myobj, function(err, res) {   
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
});
