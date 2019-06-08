import React, { Component } from 'react';
import PropTypes from 'prop-types';

import service from '../../services/cryptocompare-service';
import styles from './SelectCoin.scss';

export default class SelectCoin extends Component {
  static defaultProps = {
    value: '',
  };

  static propTypes = {
    handleCoinSelect: PropTypes.func.isRequired,
    value: PropTypes.string,
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
    const { value } = this.props;
    const options = Object.values(coins).map(coin => (
      <option key={+coin.Id} value={coin.Symbol}>
        {coin.FullName}
      </option>
    ));

    return (
      <div className={styles.selectCoin}>
        <label>
          Coin
          <input
            list="coins"
            placeholder="Select coin you need"
            value={value}
            id="select-filed"
            onChange={this.handleSelect}
            className={styles.select}
          />
        </label>
        <datalist id="coins">{options}</datalist>
      </div>
    );
  }
}
