import React from 'react';
import { ServiceContextConsumer } from '../../components/App/ServiceContext';

const withService = mapMethodsToProps => Wrapper => props => (
  <ServiceContextConsumer>
    {(service) => {
      const serviceProps = mapMethodsToProps(service);
      return <Wrapper {...props} {...serviceProps} />;
    }}
  </ServiceContextConsumer>
);


export default withService;
