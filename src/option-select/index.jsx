import React, { Component, isValidElement } from 'react';
import PropTypes from 'prop-types';

class OptionSelect extends Component {
  static defaultProps = {
    defaultOpen: true
  };

  static propTypes = {
    title(props) {
      if (isValidElement(props.title)) {
        if (typeof props.id === 'undefined') {
          return new Error('Title must be a string if id is not provided');
        }
        return null;
      }
      if (typeof props.title === 'string') {
        return null;
      }
      return new Error('Title must be either a String or a valid React element');
    },
    description: PropTypes.string,
    id: PropTypes.string,
    defaultOpen: PropTypes.bool,
    children: PropTypes.node.isRequired,
    style: PropTypes.objectOf(
      {
        maxHeight: PropTypes.string.isRequired,
        height: PropTypes.string.isRequired
      }
    )
  };

  constructor(props) {
    super(props);
    this.state = {
      isOpen: props.defaultOpen ? props.defaultOpen : false
    }
  }

  componentDidMount(){
    this.setState({browser: true})
  }

  toggle = () => {
    this.setState((prev) => ({ isOpen: !prev.isOpen }));
  };

  render() {
    const { isOpen } = this.state;
    const { title, description, style } = this.props;
    const id = this.props.id || title.replace(new RegExp(/\s/, 'g'), '-').toLowerCase();
    const controls = id + '-options';
    const labelledBy = id + '-label';
    const styles = style ? style : { maxHeight: 'none', height: '200px' };
    return (
      <div className="app-c-option-select js-collapsible">
        <button className="js-container-head" type="button" aria-expanded={isOpen} aria-controls={controls}
                onClick={this.toggle}>
          <div className="option-select-label" id={labelledBy}>
            {title}
          </div>
          <div className="js-selected-counter">{description}</div>
        </button>
        {isOpen && (
          <div role="group"
               aria-labelledby={labelledBy}
               className="options-container options-container--hod multiple-choice--hod"
               id={controls}
               style={styles}>
            <div className="js-auto-height-inner">
              {this.props.children}
            </div>
          </div>
        )
        }
      </div>
    )
  }
}

export const CheckedOption = ({ children, name, value, id, ...other }) => (
  <div className="multiple-choice govuk-checkboxes__item">
    <input name={name} value={value} id={id} type="checkbox" {...other} className="govuk-checkboxes__input" />
    <label htmlFor={id} className="govuk-label govuk-checkboxes__label">{children}</label>
  </div>
);

CheckedOption.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default OptionSelect;
