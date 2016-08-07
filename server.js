/**
 * Created by wangdanna on 16-8-7.
 */
const express = require('express');
const app = new express();
const path = require('path');

app.get('/api/forms/1', (req, res) => {
    res.json(['text', 'date']);
});

app.get('/todoList', function(req, res) {
    res.sendFile(path.join(__dirname, '/public/app.html'));
});

app.listen(8080, () => {
    console.log("==> 🌎  Listening on 8080 ");
});