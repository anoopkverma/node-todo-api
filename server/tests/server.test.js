const expect = require('expect');
const request = require('supertest');
const {ObjectId} = require('mongodb')

const {app} = require('./../server');
const {Todo} = require('./../models/todo');

// describe('POST /todos', () => {
//   it('Should process post request correctly', (done) => {
//     var text = {
//       text: 'test to todos'
//     }
//     request(app)
//     .post('/todos')
//     .send(text)
//     .expect(200)
//     .end(done)
//   })
// })

describe('GET /todos', () => {
  it('Should process GET request correctly', (done) => {
    request(app)
      .get('/todos')
      .expect(200)
      .end(done)
  })
})

describe('GET /todos/:id', () => {
  it('Should return the document for given id', (done) => {
    var id = "5a799178633f1913246e7af2";
    request(app)
      .get('/todos/' + id)
      .expect(200)
      .end(done)
  })

  it('Should return 404, if todo not found', (done) => {
    var id = new ObjectId();
    request(app)
      .get(`/todos/${id}`)
      .expect(404)
      .end(done)
  })

  it('Should return 404, if id is not valid', (done) => {
    request(app)
      .get(`/todos/1234`)
      .expect(404)
      .end(done)
  })

})
