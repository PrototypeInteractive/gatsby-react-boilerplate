import React from 'react';

import './_button.scss';

const Button = props => (
  <a href={props.link} className={`button ${props.className}`}>{props.text}</a>
);

export default Button;
