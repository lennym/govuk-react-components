import React from 'react';
import PropTypes from 'prop-types';

const cardBodyOf = (Type) => {
  const component = (props) => (
    <Type {...props} className={`card__footer${props.className ? ' ' + props.className : ''}`}>
      <span className="font-small">
        {props.children}
      </span>
    </Type>
  );
  component.defaultName = 'CardBodyOfType' + Type;
  component.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string
  };
  return component;
};

const CardBody = cardBodyOf('div');
export default CardBody;
