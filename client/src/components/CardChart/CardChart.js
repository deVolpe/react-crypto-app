import React, { memo, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Line } from 'react-chartjs-2';
import _ from 'lodash';
import moment from 'moment';

import CryptoCompareService from '../../services/cryptocompare-service';

import styles from './CardChart.scss';

const CardChart = memo(({
  index, first, second, exchange, service,
}) => {
  const [data, setData] = useState({});

  useEffect(() => {
    service.getHistoricalData(first, second, exchange).then(setData);
  }, [index]);

  function formatChartData() {
    return {
      labels: _.map(_.values(data), date => moment(date.time * 1000).format('D')),
      datasets: [
        {
          label: 'High Price',
          fill: false,
          lineTension: 0.1,
          backgroundColor: '#7b7b7b',
          borderColor: '#7b7b7b',
          borderCapStyle: 'butt',
          borderDash: [],
          borderDashOffset: 0.0,
          borderJoinStyle: 'miter',
          pointBorderColor: '#7b7b7b',
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: '#7b7b7b',
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
  service: null,
};

CardChart.propTypes = {
  first: PropTypes.string.isRequired,
  second: PropTypes.string.isRequired,
  exchange: PropTypes.string.isRequired,
  service: PropTypes.instanceOf(CryptoCompareService),
};

export default CardChart;
