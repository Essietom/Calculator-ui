'use strict';

class Result extends React.Component {
    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Answer</th>
                    </tr>
                </thead>
                <tbody>
                         <tr>
                            <td>{this.props.answer}</td>
                        </tr>
                </tbody>
            </table>
        );
    }
}


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      answer: '',
      a: '',
      b: '',
      c: ''
    };

    this.create = this.create.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }



  create(e) {
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
    })
    .then(response => {
      console.log(response)
    })
    .catch(err => {
      console.log(err);
    });

  }

  handleChange(changeObject) {
    this.setState(changeObject)
  }

  render() {
    return (
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <h1 className="display-4 text-center">Simple Calculator</h1>
              <form className="d-flex flex-column">
                <legend className="text-center">processor</legend>
                <label htmlFor="a">
                  First number:
                  <input
                    name="a"
                    id="a"
                    type="text"
                    className="form-control"
                    value={this.state.a}
                    onChange={(e) => this.handleChange({ a: e.target.value })}
                    required
                    />
                </label>
                <label htmlFor="b">
                  Second Number:
                  <input
                    name="b"
                    id="b"
                    type="test"
                    className="form-control"
                    value={this.state.b}
                    onChange={(e) => this.handleChange({ b: e.target.value })}
                    required
                    />
                </label>
                <label htmlFor="c">
                  Third Number:
                  <input
                    name="c"
                    id="c"
                    type="text"
                    className="form-control"
                    value={this.state.c}
                    onChange={(e) => this.handleChange({ c: e.target.value })}
                    />
                </label>
                <button className="btn btn-primary" type='button' onClick={(e) => this.create(e)}>
                  Calculate
                </button>
                
              </form>
            </div>
          </div>
        </div>
    );
  }
}

let domContainer = document.querySelector('#App');
ReactDOM.render(<App />, domContainer);