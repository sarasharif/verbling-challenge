import React from 'react';

export default class ListArea extends React.Component {
  render() {
    return (
      <div className="list-area">
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
      </div>
    );
  }
};

class ListItem extends React.Component {
  render() {
    return (
      <div className="list-item">
        these are List Item
      </div>
    );
  }
};
