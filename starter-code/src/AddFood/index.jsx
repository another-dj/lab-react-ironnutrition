import React, { Component } from "react";
import foods from "./../foods.json";

class AddFood extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foodList: foods,
      name: "",
      calories: "",
      image: ""
    };
    this.handleNameInput = this.handleNameInput.bind(this);
    this.handleCaloriesInput = this.handleCaloriesInput.bind(this);
    this.handleImageInput = this.handleImageInput.bind(this);
  }

  handleNameInput = event => {
    this.setState({
      name: event.target.value
    });
  };

  handleCaloriesInput = event => {
    this.setState({
      calories: event.target.value
    });
  };
  handleImageInput = event => {
    this.setState({
      image: event.target.value
    });
  };
  handleFormSubmit = event => {
    event.preventDefault();
    this.setState({
      foodList: 

    })
    
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={e => this.handleNameInput(e)}
          />

          <label>Calories:</label>
          <input
            type="text"
            name="calories"
            value={this.state.calories}
            onChange={e => this.handleCaloriesInput(e)}
          />

          <label>Image:</label>
          <input
            type="file"
            name="image"
            value={this.state.image}
            onChange={e => this.handleImageInput(e)}
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default AddFood;
