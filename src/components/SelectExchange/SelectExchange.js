import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './SelectExchange.scss';
import service from '../../services/cryptocompare-service';

export default class SelectExchange extends Component {
  static defaultProps = {
    value: '',
  };

  static propTypes = {
    handleMarketSelect: PropTypes.func.isRequired,
    value: PropTypes.string,
  };

  state = {
    exchanges: {},
  };

  componentDidMount() {
    service.getAllExchanges().then((exchanges) => {
      this.setState({ exchanges });
    });
  }

  handleSelect = (event) => {
    const market = event.target.value;
    this.props.handleMarketSelect(market);
  };

  render() {
    const { exchanges } = this.state;
    const { value } = this.props;
    const options = Object.values(exchanges).map(market => (
      <option key={+market.Id} value={market.InternalName}>
        {market.Name}
      </option>
    ));

    return (
      <div className={styles.selectMarket}>
        <label>Market
          <input
            list="exchanges"
            placeholder="Select exchange you need"
            value={value}
            onChange={this.handleSelect}
            className={styles.select}
          />
          <datalist id="exchanges">
            {options}
          </datalist>
        </label>
      </div>
    );
  }
}
