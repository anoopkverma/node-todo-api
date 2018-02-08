const {ObjectId} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const{User} = require('./../server/models/User')

// Todo.find({text: "test to todos"}, (err, doc) => {
//   if (err) {
//     return console.log(err);
//   }
//   console.log(JSON.stringify(doc, undefined, 2));
// });
//
// Todo.find({text: "test to todos"}).then((doc) => {
//   console.log(JSON.stringify(doc, undefined, 2));
// });


//checking for id in todos

var id = '5a796adf824eb01604484d5f';

if(!ObjectId.isValid(id)) {
  console.log('Invalid id');
}
Todo.findOne({_id: id}).then((doc) => {
  console.log(JSON.stringify(doc, undefined, 2));
})

Todo.findById(id).then((doc) => {
  console.log(JSON.stringify(doc, undefined, 2));
})


// checking for user in User

id = '5a796c1e1ac62d0c28c5e04b';

User.findById(id).then((doc) => {
  console.log(JSON.stringify(doc, undefined, 2));
})

User.findOne({email: 'abc@xyz.com'}).then((doc) => {
  if (!doc) {
    console.log('User does not exist!!');
  } else {
    console.log('User exist!!');
  }
})
