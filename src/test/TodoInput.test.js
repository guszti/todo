import React from 'react';
import ReactDOM from 'react-dom';
import TodoInput from '../components/TodoInput';
import { mount } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

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