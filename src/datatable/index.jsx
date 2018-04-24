import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { noop } from 'lodash';
import rootReducer from './reducers';
import { setData, setSort } from './actions'
import sort from './reducers/sort';
import Datatable from './containers/sortable-table';

class DataTable extends Component {
  constructor(options) {
    super(options);
    const {
      data,
      schema = {},
      sort
    } = this.props;
    this.store = createStore(rootReducer, {
      table: { data, schema },
      sort
    }, applyMiddleware(this.emitChange));
  }

  componentWillReceiveProps(props) {
    this.store.dispatch(setData(props.data));
  }

  emitChange = store => next => action => {
    const result = next(action);
    if (action.type === 'SET_SORT_COLUMN') {
      this.props.onChange(store.getState().sort);
    }
    return result;
  }

  static defaultProps = {
    onChange: noop
  }

  render() {
    return (
      <Provider store={this.store}>
        <Datatable formatters={this.props.formatters} />
      </Provider>
    );
  }
}

// export sort reducer and setSort action so sort can be persisted by parent scope
export {
  setSort,
  sort
};

export default DataTable;
