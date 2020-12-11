'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Result = function (_React$Component) {
  _inherits(Result, _React$Component);

  function Result() {
    _classCallCheck(this, Result);

    return _possibleConstructorReturn(this, (Result.__proto__ || Object.getPrototypeOf(Result)).apply(this, arguments));
  }

  _createClass(Result, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'table',
        null,
        React.createElement(
          'thead',
          null,
          React.createElement(
            'tr',
            null,
            React.createElement(
              'th',
              null,
              'Answer'
            )
          )
        ),
        React.createElement(
          'tbody',
          null,
          React.createElement(
            'tr',
            null,
            React.createElement(
              'td',
              null,
              this.props.answer
            )
          )
        )
      );
    }
  }]);

  return Result;
}(React.Component);

var App = function (_React$Component2) {
  _inherits(App, _React$Component2);

  function App(props) {
    _classCallCheck(this, App);

    var _this2 = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this2.state = {
      answer: '',
      a: '',
      b: '',
      c: ''
    };

    _this2.create = _this2.create.bind(_this2);
    _this2.handleChange = _this2.handleChange.bind(_this2);
    return _this2;
  }

  _createClass(App, [{
    key: 'create',
    value: function create(e) {
      // add entity - POST
      e.preventDefault();
      // creates entity
      fetch("http://localhost:8080/api/collect-data", {
        "method": "POST",
        "headers": {
          "content-type": "application/json",
          "accept": "application/json"
        },
        "body": JSON.stringify({
          a: this.state.a,
          b: this.state.b,
          c: this.state.c
        })
      }).then(function (response) {
        console.log(response);
      }).catch(function (err) {
        console.log(err);
      });
    }
  }, {
    key: 'handleChange',
    value: function handleChange(changeObject) {
      this.setState(changeObject);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      return React.createElement(
        'div',
        { className: 'container' },
        React.createElement(
          'div',
          { className: 'row justify-content-center' },
          React.createElement(
            'div',
            { className: 'col-md-8' },
            React.createElement(
              'h1',
              { className: 'display-4 text-center' },
              'Simple Calculator'
            ),
            React.createElement(
              'form',
              { className: 'd-flex flex-column' },
              React.createElement(
                'legend',
                { className: 'text-center' },
                'processor'
              ),
              React.createElement(
                'label',
                { htmlFor: 'a' },
                'First number:',
                React.createElement('input', {
                  name: 'a',
                  id: 'a',
                  type: 'text',
                  className: 'form-control',
                  value: this.state.a,
                  onChange: function onChange(e) {
                    return _this3.handleChange({ a: e.target.value });
                  },
                  required: true
                })
              ),
              React.createElement(
                'label',
                { htmlFor: 'b' },
                'Second Number:',
                React.createElement('input', {
                  name: 'b',
                  id: 'b',
                  type: 'test',
                  className: 'form-control',
                  value: this.state.b,
                  onChange: function onChange(e) {
                    return _this3.handleChange({ b: e.target.value });
                  },
                  required: true
                })
              ),
              React.createElement(
                'label',
                { htmlFor: 'c' },
                'Third Number:',
                React.createElement('input', {
                  name: 'c',
                  id: 'c',
                  type: 'text',
                  className: 'form-control',
                  value: this.state.c,
                  onChange: function onChange(e) {
                    return _this3.handleChange({ c: e.target.value });
                  }
                })
              ),
              React.createElement(
                'button',
                { className: 'btn btn-primary', type: 'button', onClick: function onClick(e) {
                    return _this3.create(e);
                  } },
                'Calculate'
              )
            )
          )
        )
      );
    }
  }]);

  return App;
}(React.Component);

var domContainer = document.querySelector('#App');
ReactDOM.render(React.createElement(App, null), domContainer);