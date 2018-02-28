import React, { Component } from 'react';
import PropTypes from 'prop-types';

class OptionSelect extends Component {
  static defaultProps = {
    defaultOpen: true
  };

  static propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
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
    const id = title.replace(new RegExp(/\s/, 'g'), '-').toLowerCase();
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
          <div role="group" aria-labelledby={labelledBy}
               className="options-container options-container--hod" id={controls}
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
  <div className="multiple-choice">
    <input name={name} value={value} id={id} type="checkbox" {...other} />
    <label htmlFor={id}>
      {children}
    </label>
  </div>
);

CheckedOption.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default OptionSelect;


