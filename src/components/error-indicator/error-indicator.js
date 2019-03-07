import React from 'react';
import * as style from './error-indicator.module.css';

const ErrorIndicator = ({error}) => {
  return (<div className={style.indicator + ' alert alert-danger'} role="alert">{error}</div>)
};

export default ErrorIndicator;
