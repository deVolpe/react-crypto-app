import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';

import service from '../../services/cryptocompare-service';
import getImgUrl from '../../utils/getImageUrl';
import CardChart from '../CardChart';
import CrossSVG from '../CrossSVG';
import styles from './Card.scss';

const cx = classnames.bind(styles);
export default class Card extends PureComponent {
  static defaultProps = {
    name: 'unknown',
    exchange: 'unknown',
  };

  static propTypes = {
    name: PropTypes.string,
    exchange: PropTypes.string,
    handleDeleteCard: PropTypes.func.isRequired,
  };

  state = {
    coinSymbol: '',
    usdSymbol: '',
    exchange: '',
    currPrice: 0,
    currIndex: 0.0,
    imgSrc: '',
    count: 1,
  };

  componentDidMount() {
    this.loadData();
    this.interval = setInterval(this.loadData, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  handleChangeCount = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  loadData = () => {
    service
      .getCoinMarketInfo(this.props.name, this.props.exchange)
      .then((data) => {
        this.setState({
          imgSrc: getImgUrl(data.IMAGEURL),
          exchange: data.MARKET,
          currPrice: data.PRICE,
          currIndex: data.CHANGEPCT24HOUR,
          coinSymbol: data.FROMSYMBOL,
          usdSymbol: data.TOSYMBOL,
        });
      });
  };

  render() {
    const {
      coinSymbol,
      usdSymbol,
      exchange,
      currPrice,
      currIndex,
      imgSrc,
      count,
    } = this.state;
    const { handleDeleteCard } = this.props;
    return (
      <>
        <div className={styles.label}>
          <img src={imgSrc} alt={coinSymbol} className={styles.img} />
          <h2 className={styles.pair}>
            {coinSymbol}-{exchange}
          </h2>
          <button
            type="button"
            className={styles.button}
            onClick={handleDeleteCard}
          >
            <CrossSVG />
          </button>
        </div>
        <div className={styles.price}>
          ${currPrice * count}
          <span
            className={cx(
              styles.index,
              { indexUp: currIndex > 0 },
              { indexDown: currIndex < 0 },
            )}
          >
            {' '}
            {currIndex.toFixed(3)}%<sub>24H</sub>
          </span>
        </div>
        <CardChart
          coin={coinSymbol}
          dollar={usdSymbol}
          exchange={exchange}
          color={currIndex < 0 ? 'red' : 'green'}
        />
        <div className={styles.counter}>
          <input
            type="number"
            name="count"
            id="input-count"
            className={styles.input}
            defaultValue={count}
            onChange={this.handleChangeCount}
          />
        </div>
      </>
    );
  }
}
