var express = require('express'),
    bodyParser = require('body-parser'),
    users = require('./users');
var app = express();

app.set('port', process.env.PORT || 3000);

//ルートパスの設定
var clientPath = __dirname.replace("/server", "/client")
app.use('/', express.static(clientPath));

//bodyParserの設定
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//urlと呼びたいメソッドの紐付け
app.post('/post_user', users.postUser, users.getUsers);
app.get('/get_users', users.getUsers);
