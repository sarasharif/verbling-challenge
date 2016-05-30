import React from 'react';

export default class SearchBar extends React.Component {

  constructor() {
    super();
    this.state = {
      input: "",
    };
  }

  appendInput(e) {
    this.setState({
      input: e.target.value
    });
    console.log(this.state);
  }

  render() {
    return (
      <input className="search-bar" onChange={this.appendInput.bind(this)} placeholder="Recherche"></input>
    );
  }
};
