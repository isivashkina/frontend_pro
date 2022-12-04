var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var domContainer = document.querySelector("#root");
var root = ReactDOM.createRoot(domContainer);
var todos = [{
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false
}, {
    userId: 1,
    id: 2,
    title: "quis ut nam facilis et officia qui",
    completed: true
}, {
    userId: 1,
    id: 3,
    title: "fugiat veniam minus",
    completed: false
}, {
    userId: 1,
    id: 4,
    title: "et porro tempora",
    completed: true
}, {
    userId: 1,
    id: 5,
    title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
    completed: false
}];

var List = function (_React$Component) {
    _inherits(List, _React$Component);

    function List() {
        _classCallCheck(this, List);

        return _possibleConstructorReturn(this, (List.__proto__ || Object.getPrototypeOf(List)).apply(this, arguments));
    }

    _createClass(List, [{
        key: "render",
        value: function render() {
            var _props$arr = this.props.arr,
                arr = _props$arr === undefined ? [] : _props$arr;

            return React.createElement(
                "ul",
                null,
                " ",
                arr.map(function (item, index) {
                    return React.createElement(
                        "li",
                        { style: item.completed ? { color: "pink" } : { color: "grey" }, key: index },
                        item.title,
                        " ",
                        React.createElement(Button, { text: item.completed ? "TRUE" : "FALSE" }),
                        " "
                    );
                })
            );
        }
    }]);

    return List;
}(React.Component);

;

var Button = function (_React$Component2) {
    _inherits(Button, _React$Component2);

    function Button() {
        _classCallCheck(this, Button);

        return _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
    }

    _createClass(Button, [{
        key: "render",
        value: function render() {
            var text = this.props.text;

            var BtnStyle = { background: text === "TRUE" ? "pink" : "silver " };
            return React.createElement(
                "button",
                { style: BtnStyle },
                text
            );
        }
    }]);

    return Button;
}(React.Component);

var App = React.createElement(
    React.Fragment,
    null,
    React.createElement(List, { arr: todos })
);

root.render(App);