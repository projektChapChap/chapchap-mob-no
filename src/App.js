import React from "react";
import data from "./data.json";
import styless from "./App.css"

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
          console.log(result);
        }
      }
    }
    return (
      <form className="form" onSubmit={this.handleSubmit} style={styles}>
        <div className="mb-3">
          <label className="form-label text-center">Enter a Phone Number</label>
          <input
            type="text"
            className="form-control w-30"
            id="phoneNoInput"
            name="phoneNo"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </div>
      </form>

      

    );
  }
}

const styles = {
  marginTop: "20%",
  marginLeft: "35%",
  marginRight: "35%",
};
