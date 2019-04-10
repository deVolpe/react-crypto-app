import React, { Component } from 'react';
import PropTypes from 'prop-types';

import service from '../../services/cryptocompare-service';

export default class SelectCoin extends Component {
  static defaultProps = {
    handleCoinChange: () => {}
  };

  static propTypes = {
    handleCoinChange: PropTypes.func.isRequired
  };

  state = {
    coins: []
  };

  componentDidMount() {
    service.getAllCoins().then(coins => {
      this.setState({ coins });
    });
  }

  handleChange = event => {
    const coin = event.target.value
    this.props.handleCoinChange(coin);
  };

  render() {
    const { coins } = this.state;
    const options = Object.values(coins).map(coin => {
      return (
        <option key={+coin['Id']} value={coin['Symbol']}>
          {coin['FullName']}
        </option>
      );
    });

    return (
      <div className="select-form__coin">
        <label htmlFor="select-field">Coin</label>
        <select name="select-market" id="select-field" onChange={this.handleChange}>
          {options}
        </select>
      </div>
    );
  }
}
