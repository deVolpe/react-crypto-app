import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import getImageUrl from '../../utils/getImageUrl';
import service from '../../services/cryptocompare-service';

export default class CryptoCard extends PureComponent {
  static propTypes = {
    coin: PropTypes.string.isRequired,
    market: PropTypes.string.isRequired
  };

  static defaultProps = {
    coin: 'unknown',
    market: 'unknown'
  };

  state = {
    imgSrc: '',
    coinSymbol: '',
    coinPrice: 0,
    lowPrices: { hour: 0, hour24: 0, day: 0 },
    highPrices: { hour: 0, hour24: 0, day: 0 }
  };

  componentDidMount() {
    const { coin, market } = this.props;
    service.getCoinMarketInfo(coin, market).then(data => {
      this.setState(state => {
        
        return {
          imgSrc: getImageUrl(data['IMG'])
        }
      });
    });
  }

  shouldComponentUpdate() {}

  render() {
    <div className="card" />;
  }
}
