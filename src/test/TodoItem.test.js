import React from 'react';
import ReactDOM from 'react-dom';
import TodoItem from '../components/TodoItem';

it('renders without crashing', () => {
  const div = document.createElement('div');

  const item = {
    checked: true
  };

  ReactDOM.render(<TodoItem todoItem={item} handleCheck={() => { return } } handleDelete={() => { return } } itemDown={() => { return } } itemUp={() => { return } } />, div);
  ReactDOM.unmountComponentAtNode(div);
});