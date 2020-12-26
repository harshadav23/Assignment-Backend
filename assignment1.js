const MongoClient = require('mongodb').MongoClient;
const url='mongodb://localhost:27017';
const dbname='Assignment';
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("Assignment");
    dbo.collection("assignment").find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});