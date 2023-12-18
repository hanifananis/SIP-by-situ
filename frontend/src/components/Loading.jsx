import React from 'react';
import ReactLoading from 'react-loading';

const Loading = ({ type, color }) => (
  <ReactLoading type={type} color={color} height={60} width={80} />
);

export default Loading;