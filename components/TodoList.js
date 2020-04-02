import React, { Component } from "react";
import CompleteItems from "./CompleteItems";
import TodoItems from "./TodoItems";
import PBar from "./ProgressBar.js";
import "./TodoList.css";

class TodoList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      completeItems: []
    };

    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    this.deleteComplete = this.deleteComplete.bind(this);
    this.completeItem = this.completeItem.bind(this);
  }

  addItem(e) {
    var itemArray = this.state.items;

    if (this._inputElement.value !== "") {
      itemArray.unshift({
        text: this._inputElement.value,
        key: Date.now()
      });

      this.setState({
        items: itemArray,
        completeItems: this.state.completeItems
      });

      this._inputElement.value = "";
    }

    console.log(itemArray);

    e.preventDefault();
  }

  deleteComplete(key) {
    var filteredItems = this.state.completeItems.filter(function(item) {
      return item.key !== key;
    });

    this.setState({
      items: this.state.items,
      completeItems: filteredItems
    });
  }

  deleteItem(key) {
    var filteredItems = this.state.items.filter(function(item) {
      return item.key !== key;
    });

    this.setState({
      items: filteredItems,
      completeItems: this.state.completeItems
    });
  }

  completeItem(key) {
    var filteredItem = this.state.items.find(function(item) {
      return item.key === key;
    });

    var completeItems = this.state.completeItems;
    completeItems.push(filteredItem);

    this.setState({
      items: this.state.items,
      completeItems: completeItems
    });

    this.deleteItem(key);

    console.log(completeItems);
  }

  render() {
    console.log(
      (this.state.completeItems.length /
        (this.state.items.length + this.state.completeItems.length)) *
        100
    );
    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.addItem}>
            <input
              ref={a => (this._inputElement = a)}
              placeholder="enter task"
            ></input>
            <button type="submit">add</button>
          </form>
        </div>
        <PBar
          percentage={
            (this.state.completeItems.length /
              (this.state.items.length + this.state.completeItems.length)) *
            100
          }
        />
        <TodoItems
          delete={this.deleteItem}
          complete={this.completeItem}
          entries={this.state.items}
        />
        <CompleteItems
          delete={this.deleteComplete}
          entries={this.state.completeItems}
        />
      </div>
    );
  }
}

export default TodoList;
