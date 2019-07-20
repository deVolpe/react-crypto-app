import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import NoContent from '../NoContent';

export default class ErrorBoundary extends PureComponent {
  static defaultProps = {
    children: null,
    message: '',
  };

  static propTypes = {
    children: PropTypes.element,
    message: PropTypes.string,
  };

  state = {
    hasError: false,
  };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    const { hasError } = this.state;
    const { children, message } = this.props;
    if (hasError) {
      return <NoContent message={message} />;
    }
    return children;
  }
}
