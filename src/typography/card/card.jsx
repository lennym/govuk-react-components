import React from 'react';
import PropTypes from 'prop-types';
import CardTitleA from './card-title';
import CardBodyA from './card-body';

const cardOf = (Type) => {
  const component = (props) => (
    <Type {...props} className={`card column-one-third${props.className ? ' ' + props.className : ''}`}>{props.children}</Type>
  );
  component.defaultName = 'ButtonOfType' + Type;
  component.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    headline: PropTypes.string.isRequired,
    subline: PropTypes.string
  };
  return component;
};

export const Card = cardOf('li');
export const CardTitle = CardTitleA;
export const CardBody = CardBodyA;
export default Card;
