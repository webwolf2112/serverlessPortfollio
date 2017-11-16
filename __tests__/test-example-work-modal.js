import React from 'react';
import { shallow } from 'enzyme';
import ExampleWorkModal from '../js/example-work-modal';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const myExample = {
    'title': "My Work 1",
    'desc': "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sinm id est laborum.",
    'href': "example.com",
    'image': {
      'src': "images/example1.png",
      'desc': "example screenshot of a project involving code",
      'comment': "This is some example work by some people"
    }
  };

describe('Example Work Modal component', () => {
  let component = shallow(<ExampleWorkModal example={myExample} open={false}/>);
  let openComponent = shallow(<ExampleWorkModal example={myExample} open={true}/>);
  let anchors = component.find('a');

  it('should contain an single a element', () => {
    expect(anchors.length).toEqual(1);
  });

  it('should link to our project', () => {
    expect(component.find('a').props().href).toEqual(myExample.href);
  });

  it('should set the correct modal class', () => {
    expect(openComponent.find('.background--skyBlue').hasClass('modal--open')).toBe(true);
    expect(component.find('.background--skyBlue').hasClass('modal--open')).toBe(false);
  });
})
