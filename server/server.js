const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3001;

if (!fs.existsSync(__dirname + '/todos.json')) {
  fs.writeFileSync(__dirname + '/todos.json', '[]', 'utf-8');
}

app.use(cors());
app.use(bodyParser.json());
app.use('/', express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  return res.send({ todoapi: '1.0' });
});

app.get('/todos', function(req, res) {
  fs.readFile(__dirname + '/todos.json', 'utf-8', function(err, data) {
    if (err) {
      return res.send({ error: err });
    }

    let todos = JSON.parse(data);

    if (!req.query.q) {
      return res.send(todos);
    }

    let q = req.query.q;
    let resultTodos = [];

    for (let i = 0; i < todos.length; i++) {
      if (new String(todos[i].text).toLocaleLowerCase().includes(q)) {
        resultTodos.push(todos[i]);
      }
    }

    return res.send(resultTodos);
  });
});

app.post('/todos', function(req, res) {
  if (!req.body.text) {
    return res.send({ error: 'Text is required' });
  }

  fs.readFile(__dirname + '/todos.json', 'utf-8', function(err, data) {
    if (err) return res.send({ error: err });

    let todos = JSON.parse(data);
    let newTodo = {
      id: new Date(),
      text: req.body.text,
      done: null
    };

    todos.push(newTodo);
    let todosJSON = JSON.stringify(todos);
    fs.writeFile(__dirname + '/todos.json', todosJSON, 'utf-8', function(err) {
      if (err) return res.send({ error: err });

      return res.send({
        error: 0,
        ...newTodo
      });
    });
  });
});

app.put('/todos/:id', function(req, res) {
  if (!req.body.change) {
    return res.send({ error: 'changeObject is required' });
  }

  fs.readFile(__dirname + '/todos.json', 'utf-8', function(err, data) {
    if (err) return res.send({ error: err });
    let todos = JSON.parse(data);
    let itemFound = false;
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].id == req.params.id) {
        todos[i] = {
          ...todos[i],
          ...req.body.change
        };
        itemFound = true;
        break;
      }
    }
    if (!itemFound) return res.send({ error: 'Item not found' });

    let todosJSON = JSON.stringify(todos);
    fs.writeFile(__dirname + '/todos.json', todosJSON, 'utf-8', function(err) {
      if (err) return res.send({ error: err });
      return res.send({ error: 0, message: 'Change successfull' });
    });
  });
});

app.delete('/todos/:id', function(req, res) {
  fs.readFile(__dirname + '/todos.json', 'utf-8', function(err, data) {
    if (err) return res.send({ error: err });

    let todos = JSON.parse(data);
    let todoFound = false;
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].id == req.params.id) {
        todos.splice(i, 1);
        todoFound = true;
        break;
      }
    }

    if (!todoFound) {
      return res.send({ error: 'invalid id' });
    }

    let todosJSON = JSON.stringify(todos);
    fs.writeFile(__dirname + '/todos.json', todosJSON, 'utf-8', function(err) {
      if (err) return res.send({ error: err });

      return res.send({
        error: 0,
        deleted: req.params.id,
        message: 'deletion successfull'
      });
    });
  });
});

console.log('todo-server started on port: ' + port);
app.listen(port);
