import { GET_ERROR } from './types';

export const getError = error => ({ type: GET_ERROR, payload: error });
