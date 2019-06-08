import React, { memo, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Line } from 'react-chartjs-2';
import _ from 'lodash';
import moment from 'moment';

import service from '../../services/cryptocompare-service';

import styles from './CardChart.scss';

const CardChart = memo(({
  color, coin, dollar, exchange,
}) => {
  const [data, setData] = useState({});

  useEffect(() => {
    service.getHistoricalData(coin, dollar, exchange).then(setData);
  }, [coin]);

  function formatChartData() {
    return {
      labels: _.map(_.values(data), date => moment(date.time * 1000).format('D')),
      datasets: [
        {
          label: 'High Price',
          fill: false,
          lineTension: 0.1,
          backgroundColor: color,
          borderColor: color,
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: color,
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: color,
          pointHoverBorderColor: 'rgba(220,220,220,1)',
          pointHoverBorderWidth: 2,
          pointRadius: 3,
          pointHitRadius: 10,
          data: _.map(_.values(data), price => price.high),
        },
      ],
    };
  }

  return (
    <div className={styles.chart}>
      <Line data={formatChartData()} />
    </div>
  );
});
CardChart.defaultProps = {
  color: null,
};

CardChart.propTypes = {
  color: PropTypes.oneOf(['red', 'green']),
  coin: PropTypes.string.isRequired,
  dollar: PropTypes.string.isRequired,
  exchange: PropTypes.string.isRequired,
};

export default CardChart;
