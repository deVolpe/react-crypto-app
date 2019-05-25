import React, { Component } from 'react';
import PropTypes from 'prop-types';

import service from '../../services/cryptocompare-service';
import styles from './SelectCoin.scss';

export default class SelectCoin extends Component {
  static propTypes = {
    handleCoinSelect: PropTypes.func.isRequired,
  };

  state = {
    coins: [],
  };

  componentDidMount() {
    service.getAllCoins().then((coins) => {
      this.setState({ coins });
    });
  }

  handleSelect = (event) => {
    const coin = event.target.value;
    this.props.handleCoinSelect(coin);
  };

  render() {
    const { coins } = this.state;
    const options = Object.values(coins).map(coin => (
      <option key={+coin.Id} value={coin.Symbol}>
        {coin.FullName}
      </option>
    ));

    return (
      <div className={styles.selectCoin}>
        <label htmlFor="select-first">First Coin</label>
        <select
          name="select-market"
          id="select-first"
          onChange={this.handleSelect}
          className={styles.select}
        >
          {options}
        </select>
      </div>
    );
  }
}
