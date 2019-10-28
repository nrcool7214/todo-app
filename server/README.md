### Server init

In order to start the server just run `node server.js`.  
Make sure you have run `npm install` first from within the server directory.  
The server will run at port `:3001`.  
Feel free to add more endpoints to the server and play around with it.

### Examples of axios calls for our server

**GET**

```javascript
const res = await axios.get(`http://localhost:3001/todos`);
```

**PUT**

```javascript
const res = await axios.put(`http://localhost:3001/todos/${id}`, {
  change: { done: !item.done }
});
```
