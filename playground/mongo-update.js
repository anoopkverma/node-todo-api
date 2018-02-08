// const  MongoClient = require('mongodb').MongoClient;

// By using object destructing assignment
const {MongoClient, ObjectId} = require('mongodb');

const url = 'mongodb://localhost:27017';

MongoClient.connect(url, (error, database) => {
  if (error) {
    console.log('Unable to connect');
  } else {
    const db =  database.db('TodoApp');
    console.log('Successfully connected!');
    // findOneAndUpdate
    // db.collection('Todos').findOneAndUpdate({
    //   _id: new ObjectId('5a7821b7dd2e9b28f805e41d')
    // }, {
    //   $set: {
    //     completed: false
    //   }
    // }, (err, res) => {
    //   if(err) {
    //     console.log('Unable to update');
    //   } else {
    //     console.log('successfully updated!!');
    //   }
    // })

    db.collection('Users').findOneAndUpdate({
      _id: new ObjectId("5a78599b1333d91bd4c0a539")
    }, {
      $set: {
        name: 'Anoop Verma'
      },
      $inc: {
        age: 1
      }
    }, (err, res) => {
      if(err) {
        console.log('Unable to update');
      } else {
        console.log('successfully updated !!');
      }
    })
  }
  // database.close();
});
