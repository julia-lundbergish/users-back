var express = require('express');
var router = express.Router();

let users = [
  {id: 1, name: 'John'},
  {id: 2, name: 'Jane', password: "test"},
  {id: 3, name: 'Bob'},
  {id: 4, name: 'Alice'},
  {id: 5, name: 'Bengt'}
]

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(users);
});

router.post('/', function(req, res, next) {

  let newUser = req.body;
  newUser.id = users.length + 1;
  users.push(newUser);
  console.log(newUser);
  res.json(users);
});

router.post('/login', function(req, res, next) {
  const { name, password } = req.body;
  const foundUser = users.find(user => user.name === name);

  if(password === foundUser.password) {
    res.status(201).json({name: foundUser.name, id: foundUser.id})
  } else {
    res.status(401).json("Felaktiga uppgifter")
  }
});

router.get('/test', function(req, res, next) {
  res.send('test routen');
});

module.exports = router;
