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
    // deleteMany
    // db.collection('Todos').deleteMany({text: 'Eat Lunch'}, (err, res) => {
    //   console.log(res.result);
    // })

    // deleteOne
    // db.collection('Todos').deleteOne({text: 'Eat Lunch'}, (err, res) => {
    //   console.log(res);
    // })

    // findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: false}, (err, res) => {
    //   console.log(res);
    // })

    db.collection('Users').deleteMany({name: 'Anoop'}, (err, res) => {
      if(err) {
        console.log('Not deleted');
      } else {
        console.log(`${res.result.n} items are deleted successfully`);
      }
    })
  }
  // database.close();
});
