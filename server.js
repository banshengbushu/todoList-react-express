/**
 * Created by wangdanna on 16-8-7.
 */
const express = require('express');
const app = new express();
const path = require('path');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

// app.post('/api/forms/1', (req, res) => {
//     console.log(req.body);
//      res.send(req.body);
//     //res.sendFile(path.join(__dirname, '/public/app.json'));
// });
// //
app.get('/todoList', function(req, res) {
     // res.send(req.body);
    res.sendFile(path.join(__dirname, '/public/app.html'));
});

app.listen(8080, () => {
    console.log("==> 🌎  Listening on 8080 ");
});