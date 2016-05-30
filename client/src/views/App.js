import React from 'react';

import SearchBar from './SearchBar';
import ListArea from './ListArea';

export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      items: [],
      toggleStatus: 1,
      toggleCommand: 1
    };
  }

  openItems() {
    this.setState({
      toggleStatus: 2,
      toggleCommand: 1
    });
  }

  closeItems() {
    this.setState({
      toggleStatus: 1,
      toggleCommand: 1
    });
  }

  toggleItems() {
    if (this.state.toggleCommand === 2) {
      this.setState({
        toggleStatus: null,
        toggleCommand: 1
      });
    } else {
      this.setState({
        toggleStatus: null,
        toggleCommand: 2
      });
    }
  }

  addListItem() {
    var title = window.prompt("What's the title of your list item?");
    var content = window.prompt("What's the content of your list item?", "please enter text here");
    var newItemList = this.state.items;
    newItemList.push([title, content]);

    this.setState({
      items: newItemList
    });
  }

  render() {
    return (
      <div className="app">
        <SearchBar />
        <ListArea items={this.state.items.slice().reverse()} toggleStatus={this.state.toggleStatus} toggleCommand={this.state.toggleCommand} />
        <div className="button-list">
          <button onClick={this.openItems.bind(this)} className="button">Open All</button>
          <button onClick={this.closeItems.bind(this)} className="button">Close All</button>
          <button onClick={this.toggleItems.bind(this)} className="button">Toggle All</button>
          <button onClick={this.addListItem.bind(this)} className="button">Add</button>
        </div>
      </div>
    );

  };
};
