import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';

import getImgUrl from '../../utils/getImageUrl';
import CardChart from '../CardChart';
import CrossSVG from '../CrossSVG';
import styles from './Card.scss';

const cx = classnames.bind(styles);
export default class Card extends PureComponent {
  static defaultProps = {
    firstCoin: 'unknown',
    secondCoin: 'unknown',
    exchange: 'unknown',
    service: null,
  };

  static propTypes = {
    firstCoin: PropTypes.string,
    secondCoin: PropTypes.string,
    exchange: PropTypes.string,
    handleDeleteCard: PropTypes.func.isRequired,
    service: PropTypes.objectOf(PropTypes.func),
  };

  state = {
    firstCoinSymbol: '',
    secondCoinSymbol: '',
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
    this.props.service
      .getCoinMarketInfo(
        this.props.firstCoin,
        this.props.secondCoin,
        this.props.exchange,
      )
      .then((data) => {
        this.setState({
          imgSrc: getImgUrl(data.IMAGEURL),
          exchange: data.MARKET,
          currPrice: data.PRICE,
          currIndex: +data.CHANGEPCT24HOUR,
          firstCoinSymbol: data.FROMSYMBOL,
          secondCoinSymbol: data.TOSYMBOL,
        });
      });
  };

  render() {
    const {
      firstCoinSymbol,
      secondCoinSymbol,
      exchange,
      currPrice,
      currIndex,
      imgSrc,
      count,
    } = this.state;
    const { handleDeleteCard, service } = this.props;
    return (
      <>
        <div className={styles.label}>
          <img src={imgSrc} alt={firstCoinSymbol} className={styles.img} />
          <h2 className={styles.pair}>
            {firstCoinSymbol}-{secondCoinSymbol}-{exchange}
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
          {currPrice}
          <span
            className={cx(
              styles.index,
              { indexUp: currIndex > 0 },
              { indexDown: currIndex < 0 },
            )}
          >
            {' '}
            {currIndex.toFixed(3)}%{' '}<sub>24H</sub>
          </span>
        </div>
        <CardChart
          first={firstCoinSymbol}
          second={secondCoinSymbol}
          exchange={exchange}
          color={currIndex < 0 ? 'red' : 'green'}
          service={service}
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
