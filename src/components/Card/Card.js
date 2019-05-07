import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import service from '../../services/cryptocompare-service';
import getImgUrl from '../../utils/getImageUrl';

export default class Card extends PureComponent {
  static defaultProps = {
    name: 'unknown',
    exchange: 'unknown',
    count: 1,
    handleDeleteCard: () => { }
  };
  static propTypes = {
    name: PropTypes.string.isRequired,
    exchange: PropTypes.string.isRequired,
    count: PropTypes.number,
    handleDeleteCard: PropTypes.func.isRequired
  };

  state = {
    name: '',
    exchange: '',
    currPrice: 0,
    lowPrice: {hour: 0, day: 0, _24hours: 0 },
    highPrice: {hour: 0, day: 0, _24hours: 0 },
    count: 1,
    imgSrc: ''
  }

  componentDidMount() {
    service.getCoinMarketInfo(this.props.name, this.props.exchange)
      .then(data => {
        this.setState(state => {
          
        })
      })
  }

  render() {

    const { name, exchange, currPrice, lowPrice, highPrice, count, imgSrc} = this.state;

    return (
      <>
        <div className="card-label">
          <img src={imgSrc} alt={name} className="coin-img"/>
          <h2>{name}-{exchange}</h2>
        </div>
        
      </>
    )
  }
}
