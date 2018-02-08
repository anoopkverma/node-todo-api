// const  MongoClient = require('mongodb').MongoClient;

// By using object destructing assignment
const {MongoClient} = require('mongodb');

const url = 'mongodb://localhost:27017';

MongoClient.connect(url, (error, database) => {
  if (error) {
    console.log('Unable to connect');
  } else {
    const db =  database.db('TodoApp');
    console.log('Successfully connected!');
    //console.log(db);
    // db.collection('Todos').insertOne({
    //   text: 'Something to do better',
    //   completed: true
    // }, (error, result) => {
    //   if (error) {
    //     console.log('Unable to insert in database');
    //   } else {
    //     console.log('Successfully inserted in database');
    //     console.log(result.ops, undefined, 2);
    //   }
    // });

    db.collection('Users').insertOne({
      name: "Anoop",
      age: 22,
      location: 'Ghaziabad'
    }, (err, result) => {
      if (err) {
        console.log('Unable to insert data in User collection');
      } else {
        console.log('Successfully inserted in Users collection');
        console.log(result.ops[0]._id.getTimestamp(), undefined, 2);
      }
    });
  }
  database.close();
});
