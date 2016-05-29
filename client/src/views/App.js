import React from 'react';


import SearchBar from './SearchBar';
import ListArea from './ListArea';
import ButtonList from './ButtonList';

export default class App extends React.Component {
  render() {
    return (
      <div className="app">
        <SearchBar />
        <ListArea />
        <ButtonList />
      </div>
    );

  };
};
