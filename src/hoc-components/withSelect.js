import React, { Component } from 'react';

const withSelect = SelectComponent => class extends Component {
  state = {
    data: {},
  };

  componentDidMount() {
    this.props.getData().then((data) => {
      this.setState({ data });
    });
  }

  handleSelect = (e) => {
    const item = e.target.value;
    this.props.handleItemSelect(item);
  };

  render() {
    const { data } = this.state;
    return (
      <SelectComponent
        {...this.props}
        data={data}
        handleSelect={this.handleSelect}
      />
    );
  }
};

export default withSelect;
