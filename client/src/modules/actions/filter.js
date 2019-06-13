import { FILTER_LIST } from './types';

export const filter = term => ({ type: FILTER_LIST, payload: term });
