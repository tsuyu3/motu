var db = require('./pghelper')


function getUsers(req, res, next) {
    db.query(
        'SELECT * FROM users',
        [],
        function(err,datas){
            if (err) {
                console.log(err)
                return res.status(400).send('エラーが発生しました');
            }
            return res.send(JSON.stringify(datas));
        }
    );
}

function postUser(req, res, next){
    var user = req.body;
    db.query(
        'INSERT INTO users (name, mail) VALUES ($1, $2) ',
        [user.name, user.mail],
        function(err, datas){
            if (err){
                console.log(err);
                return res.status(400).send('エラーが発生しました');
            }
            return next();
        }
    );
}

exports.getUsers = getUsers;
exports.postUsers = postUsers;