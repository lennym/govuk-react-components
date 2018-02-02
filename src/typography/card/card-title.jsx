import React from 'react';
import PropTypes from 'prop-types';

const cardTitleOf = (Type) => {
  const component = (props) => (
    <Type {...props} className={`card__body${props.className ? ' ' + props.className : ''}`}>
      <span className="bold-xlarge">{props.headline}</span>
      <span className="bold-small">{props.subline}</span>
    </Type>
  );
  component.defaultName = 'CardTitleOfType' + Type;
  component.propTypes = {
    className: PropTypes.string,
    headline: PropTypes.string.isRequired,
    subline: PropTypes.string
  };
  return component;
};

const CardTitle = cardTitleOf('a');
CardTitle.propTypes = Object.assign({ href: PropTypes.string.isRequired }, CardTitle.propTypes);

export default CardTitle;
