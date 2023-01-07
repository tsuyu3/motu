var Dispatcher = require('../dispatchers/dispatcher');

var userActions = {
    //ユーザー一覧の取得
    load: function (target) {
        Dispatcher.handleServerActioin({
            //typeにはStoreクラスで実行したい処理を指定
            type: 'load',
            //targetにはStoreクラスに渡したい引数を指定
            target: target
        });
    },
    register: function (target) {
        Dispatcher.handleServerActioin({
            type: 'register',

            target: target
        });
    }
};
module.exports = userActions;