import React from 'react';
import PropTypes from 'prop-types';

import './_button.scss';

const Button = (props) => (
    <a href={ props.link } className={ `button ${props.className}` }>
        {props.text}
    </a>
);

Button.propTypes = {
    link: PropTypes.string.isRequired,
    className: PropTypes.string,
    text: PropTypes.string.isRequired,
};

Button.defaultProps = {
    className: '',
};

export default Button;
