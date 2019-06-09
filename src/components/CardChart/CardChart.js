import React, { memo, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Line } from 'react-chartjs-2';
import _ from 'lodash';
import moment from 'moment';

import styles from './CardChart.scss';

const CardChart = memo(({
  color, first, second, exchange, service,
}) => {
  const [data, setData] = useState({});

  useEffect(() => {
    service.getHistoricalData(first, second, exchange).then(setData);
  }, [color]);

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
  service: null,
};

CardChart.propTypes = {
  color: PropTypes.oneOf(['red', 'green']),
  first: PropTypes.string.isRequired,
  second: PropTypes.string.isRequired,
  exchange: PropTypes.string.isRequired,
  service: PropTypes.objectOf(PropTypes.func),
};

export default CardChart;
