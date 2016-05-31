import React from 'react';

export default class ListArea extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    var that = this;
    return (
      <div className="list-area">
        {
          that.props.items.map(function(item){
            return <ListItem
              title={item[0]}
              body={item[1]}
              toggleStatus={that.props.toggleStatus}
              toggleCommand={that.props.toggleCommand}
            />;
          })
        }
      </div>
    );
  }
};

class ListItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      toggleStatus: 1,
      toggleCommand: 1
    };
  }

  componentWillReceiveProps(props) {
    this.setState({
      toggleStatus: props.toggleStatus || this.state.toggleStatus,
      toggleCommand: props.toggleCommand || this.state.toggleCommand
    });
  }

  toggleItem() {
    if (this.state.toggleStatus === 1) {
      this.setState({toggleStatus: 2});
    } else {
      this.setState({toggleStatus: 1});
    }
  }

  openItem() {
    this.setState({toggleStatus: 2});
  }

  closeItem() {
    this.setState({toggleStatus: 1});
  }

  listItemTitle() {
    return (
      <p className="list-title">{this.props.title}</p>
    );
  }

  toggleButtonIcon() {
    if (this.state.toggleStatus === this.state.toggleCommand) {
      return (
        <i className="fa fa-caret-left" aria-hidden="true"></i>
      );
    } else {
      return (
        <i className="fa fa-caret-down" aria-hidden="true"></i>
      );
    }
  }

  listItemDescription() {
    if (this.state.toggleStatus === this.state.toggleCommand) {
      return (<div></div>);
    } else {
      return (
        <p className="list-body">{this.props.body}</p>
      );
    }
  }

  render() {
    return (
      <div className="list-item">
        {this.listItemTitle()}
        <button onClick={this.toggleItem.bind(this)} className="toggle-button">
          {this.toggleButtonIcon()}
        </button>
        {this.listItemDescription()}
      </div>
    );
  }
};
