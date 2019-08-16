import React from 'react';
import ReactDOM from 'react-dom';
import TodoInput from '../components/TodoInput';
import TodoList from '../components/TodoList';
import { mount } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { create } from 'react-test-renderer';
import { jsxEmptyExpression } from '@babel/types';

Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TodoInput />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('form input', () => {
  test('typing', () => {
    let component = mount(<TodoInput />);
    let input = component.find('input').at(0);
    input.instance().value = 'Will this test pass?';
    input.simulate('change');

    expect(component.state().inTitle).toEqual('Will this test pass?');
  });
});

test('creating todo-item', () => {
  let component = mount(<TodoInput />);

  component.instance().state.inTitle = 'title';
  component.instance().state.inDate = 'date';

  const newTodo = component.instance().createTodo();

  expect(newTodo).toEqual({title: 'title', date: 'date', checked: false});
});

test('submit todoitem', () => {
  const fake = jest.spyOn(TodoInput.prototype, 'handleSubmit');
  const component = mount(<TodoInput addItem={ () => { return; } } />);
  component.find('form').at(0).simulate('submit');
  
  expect(fake).toHaveBeenCalled();
});
fhadsjkfh dasfdhs fdashfkj dhsfkj h