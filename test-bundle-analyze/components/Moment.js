import React from 'react';
import moment from 'moment';

export const Moment = () => {
  const day = moment().format('MMMM Do YYYY, h:mm:ss a');
  return <div>{day}</div>;
};

export default Moment;
