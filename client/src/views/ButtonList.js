import React from 'react';


export default class App extends React.Component {

  openItems() {
    console.log("open all items");
  }

  closeItems() {
    console.log("close all items");
  }

  toggleItems() {
    console.log("toggle all items");
  }

  addListItem() {
    console.log("add a list item now")
  }

  render() {
    return (
      <div className="button-list">
        <button onClick={this.openItems} className="button">Open All</button>
        <button onClick={this.closeItems} className="button">Close All</button>
        <button onClick={this.toggleItems} className="button">Toggle All</button>
        <button onClick={this.addListItem} className="button">Add</button>
      </div>
    );
  }
};
