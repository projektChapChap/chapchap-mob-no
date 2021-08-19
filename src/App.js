import React from "react";
import data from "./data.json";
import "./App.scss";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    const num = this.state.value;
    const trimmedString = num.substring(0, 3);

    for (var obj in data) {
      const datum = data[obj].phone;

      for (var obj2 in datum) {
        if (trimmedString === datum[obj2]) {
          var result = data[obj].name;
          // var image = data[obj].image;
        }
      }
    }
    return (
      <div style={styles}>
        <h5>Jua namba Chap-chap!</h5>

        <div>
          <input
            value={this.state.value}
            ref="search"
            onChange={this.handleChange}
            placeholder="andika namba hapa"
            type="number"
            maxLength="10"
          />
        </div>
        <div id="type">
          <h6>{result}</h6>

          <br />
        </div>
        <footer class="footer mt-auto py-3">
          <div class="container">
            <span class="text-muted">
              <a href="https://github.com/projektChapChap/">Github</a>
            </span>
          </div>
        </footer>
      </div>
    );
  }
}

const styles = {
  marginTop: "25%",
};
