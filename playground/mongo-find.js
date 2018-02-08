// const  MongoClient = require('mongodb').MongoClient;

// By using object destructing assignment
const {MongoClient, ObjectId} = require('mongodb');

const url = 'mongodb://localhost:27017';

// MongoClient.connect(url, (error, database) => {
//   if (error) {
//     console.log('Unable to connect');
//   } else {
//     const db =  database.db('TodoApp');
//     console.log('Successfully connected!');
//     var cursor = db.collection('Todos').find({
//       _id: new ObjectId('5a782154d89e4d242c1c920e')})
//       .toArray().then((doc) => {
//       console.log(JSON.stringify(doc, undefined, 2));
//     });
//   }

MongoClient.connect(url, (error, database) => {
  if (error) {
    console.log('Unable to connect');
  } else {
    const db =  database.db('TodoApp');
    console.log('Successfully connected!');
    db.collection('Users').find()
      .count((err, count) => {
        if(err) {
          return console.log('Unable to fetch document');
        }
        console.log(`Users Collection count : ${count}`);
      });
    db.collection('Users').find({name: 'Anoop'})
      .toArray((err, doc) => {
        if(err) {
          return console.log('Unable to fetch document');
        }
        console.log(JSON.stringify(doc, undefined, 2));
      });
  }
  // database.close();
});
