var pg = require('pg'),
//ここはmongoへの接続を記載に変更しよう
    databaseURL = 'postgres://postgres:{パスワード}@127.0.0.1:5432/postgres';

exports.query = function (sql, values, callback){
    console.log(sql, values);

    pg.Connection(databaseURL, function (err, conn, done){
        if (err) {
            return callback(err);
        }
        try {
            conn.query(sql, values, function (err,res){
                done();
                if (err) {
                    callback(err);
                }else{
                    callback(null, res.rows);
                }
            });
        }catch (e){
            done();
            callback(e);
        }
    });
};