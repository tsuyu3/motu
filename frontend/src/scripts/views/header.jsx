var React = require('react');
var ReactRouter = require('react-router');
var History = ReactRouter.History;
var Link = ReactRouter.Link;

//ヘッダの定義
var Header = React.createClass({
    mixins: [ History ],
    handleClick: function(e){
        //ログアウト処理

        this.history.pushState(null, '/');
    },
    render: function(){
        return (
            <header>
                <div style={{position: "absolute", margin:"-15px 0px"}}>
                    <h1>ヘッダー</h1>
                </div>
                <div style={{position: "relative", textAlign:"right", paddinTop:"30px"}}>
                    <Link to="/portal" style={{paddinRight: "5px"}}>ポータル</Link>
                    <Link to="/userbox" style={{paddinRight: "5px"}}>ユーザーリスト</Link>
                    <button onClick={this.handleClick}>ログアウト</button>
                </div>
            </header>
        );
    }
});

module.exports = Header;