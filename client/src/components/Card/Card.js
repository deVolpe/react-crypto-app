import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames/bind';
import { round } from 'lodash';

import getImgUrl from '../../utils/getImageUrl';
import CrossSVG from '../CrossSVG';
import styles from './Card.scss';

const cx = classnames.bind(styles);
export default class Card extends PureComponent {
  static defaultProps = {
    firstCoin: 'unknown',
    secondCoin: 'unknown',
    exchange: 'unknown',
    service: null,
    render: () => {},
  };

  static propTypes = {
    firstCoin: PropTypes.string,
    secondCoin: PropTypes.string,
    exchange: PropTypes.string,
    handleDeleteCard: PropTypes.func.isRequired,
    service: PropTypes.objectOf(PropTypes.func),
    render: PropTypes.func,
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
          currIndex: data.CHANGEPCT24HOUR,
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
    const { handleDeleteCard, render } = this.props;
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
        <span
          className={cx(
            styles.index,
            { indexUp: currIndex > 0 },
            { indexDown: currIndex < 0 },
          )}
        >
          {' '}
          {currIndex.toFixed(4)}% <sub>24H</sub>
        </span>
        {render(this.state)}
        <div className={styles.data}>
          <span className={styles.price}>
            {secondCoinSymbol} {round(currPrice * count, 12)}
          </span>
        </div>
        <div className={styles.counter}>
          <input
            type="number"
            name="count"
            id="input-count"
            className={styles.input}
            defaultValue={count}
            min="1"
            onChange={this.handleChangeCount}
          />
        </div>
      </>
    );
  }
}
