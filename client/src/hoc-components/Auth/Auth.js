import React from 'react';

import withAuth from './withAuth';
import compose from '../Features/compose';


const Login = compose(withAuth);

const Register = compose(withAuth);

export {
  Login, Register,
};
