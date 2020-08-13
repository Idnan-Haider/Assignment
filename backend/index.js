const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(cors({
  origin: '*'
}));

app.use(bodyParser.json({
  limit: '250mb'
}));
app.use(bodyParser.urlencoded({
  extended: true
}));

let users = [{
  id: 1,
  name: 'Adnan Haider',
  dateOfBirth: new Date('1996-06-29'),
  emailId: 'adnan@mail.com',
  gender: 'Male',
  contactNumber: '03138520000'
}];

app.get('/getAllUsers', function (req, res) {
  res.send([...users])
})

app.get('/findUser/:id', function (req, res) {
  let foundIndex = users.findIndex(x => x.id == req.params.id);

  res.send(users[foundIndex])
})

app.post('/createUser', function (req, res) {
  let pd = {
    id: getNewId(),
    ...req.body
  }
  users.push(pd);
  res.send(pd);
})

app.put('/updateUser/:id', function (req, res) {
  let foundIndex = users.findIndex(x => x.id == req.params.id);
  users[foundIndex] = req.body;
  res.send({
    update: true
  })
})

app.delete('/deleteUser/:id', function (req, res) {
  let foundIndex = users.findIndex(x => x.id == req.params.id);
  users.splice(foundIndex, 1);
  res.send({
    update: true
  })
})

function getNewId() {
  if (users.length) {
    return users[users.length - 1].id + 1;
  } else {
    return 1;
  }
}

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})