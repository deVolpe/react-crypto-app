import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Line, Chart } from 'react-chartjs-2';
import classnames from 'classnames/bind';

import styles from './CardChart.scss';

const cx = classnames.bind(styles);

export default class CardChart extends PureComponent {
  static defaultProps = {
    color: null,
  };

  static propTypes = {
    color: PropTypes.oneOf(['red', 'green']),
    data: PropTypes.object.isRequired,
  };

  render() {
    return (
      <div className={styles.chart}>
        <Line ref="chart" data={this.props.data} />
      </div>
    );
  }
}
