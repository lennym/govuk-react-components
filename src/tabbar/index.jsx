import React from 'react'
import PropTypes from 'prop-types'

export const TabBar = (props) => {
  const {vertical, className, children, ...other} = props;
  return (
    <ul
      {...other}
      className={`tab__nav ${vertical ? 'vertical' : 'horizontal'} ${className ? ` ${className}` : ''}`}
    >
      {children}
    </ul>
  )
}

TabBar.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  vertical: PropTypes.bool
}

export default TabBar
