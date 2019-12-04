import React, { Component } from "react";
import "./App.scss";
import "./foods.json";
import foodList from "./foods";
import FoodBox from "./FoodBox";
import AddFood from "./AddFood";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showForm: false,
      list: foodList
    };
    this.toggleForm = this.toggleForm.bind(this);
    this.addFoodHandler = this.addFoodHandler.bind(this);
  }
  toggleForm() {
    this.setState({
      showForm: !this.state.showForm
    });
    console.log(this.state.showForm);
  }

  addFoodHandler = newFood => {
    const list = [...this.state.list, newFood];
    list.push(newFood);
    this.setState({
      foodList: list
    });
  };

  render() {
    return (
      <div className="App">
        <button onClick={this.toggleForm}>Add Food</button>
        {this.state.showForm && <AddFood submited={this.addFoodHandler} />}
        <FoodBox />
      </div>
    );
  }
}

export default App;
