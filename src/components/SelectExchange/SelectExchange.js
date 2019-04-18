import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from'./SelectExchange.scss';
import service from '../../services/cryptocompare-service';

export default class SelectExchange extends Component {
  static defaultProps = {
    handleMarketChange: () => {}
  };

  static propTypes = {
    handleMarketChange: PropTypes.func.isRequired
  };

  state = {
    exchanges: {}
  };

  componentDidMount() {
    service.getAllExchanges().then(exchanges => {
      this.setState({ exchanges });
    });
  }

  handleChange = event => {
    const market = event.target.value;
    this.props.handleMarketChange(market);
  };

  render() {
    const { exchanges } = this.state;

    const options = Object.values(exchanges).map(market => {
      return (
        <option key={+market['Id']} value={market['Name']}>
          {market['Name']}
        </option>
      );
    });

    return (
      <div className="select-form__market">
        <label htmlFor="select-field">Market</label>
        <select name="select-market" id="select-field" onChange={this.handleChange}>
          {options}
        </select>
      </div>
    );
  }
}
