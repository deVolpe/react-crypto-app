import React from 'react';

const withChildFunction = (...fn) => Wrapper => props => (
  <Wrapper {...props}>{fn}</Wrapper>
);

export default withChildFunction;
