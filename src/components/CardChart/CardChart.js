import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Line, Chart } from 'react-chartjs-2';
import classnames from 'classnames/bind';

import styles from './CardChart.scss';

const cx = classnames.bind(styles);

const CardChart = memo(({ color, data }) => {
  return (
    <div className={styles.chart}>
      <Line ref="chart" data={this.props.data} />
    </div>
  );
});
CardChart.defaultProps = {
  color: null
};

CardChart.propTypes = {
  color: PropTypes.oneOf(['red', 'green']),
  data: PropTypes.object.isRequired
};

export default CardChart;