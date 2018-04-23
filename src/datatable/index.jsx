import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { noop } from 'lodash';
import rootReducer from './reducers';
import { setData, setSchema, setSort } from './actions'
import Datatable from './sortable-table';

class DataTable extends Component {
  constructor(options) {
    super(options);
    const {
      data,
      schema = {},
      sort
    } = this.props;

    this.store = createStore(rootReducer, applyMiddleware(this.emitChange));
    this.store.dispatch(setData(data));
    this.store.dispatch(setSchema(schema));
    if (sort) {
      this.store.dispatch(setSort(sort));
    }
  }

  emitChange = store => next => action => {
    const result = next(action);
    if (action.type === 'SET_SORT_COLUMN') {
      this.props.onChange(store.getState().sort)
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

export default DataTable;
