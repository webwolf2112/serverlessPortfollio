import React from 'react';
import { shallow } from 'enzyme';
import ExampleWork, { ExampleWorkBubble } from '../js/example-work';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

//jest is running these tests

const myWork = [
  {
    'title': "My Work 1",
    'image': {
      'src': "images/example1.png",
      'desc': "example screenshot of a project involving code",
      'comment': "This is some example work by some people"
    }
  }, {
    'title': "My Work 2",
    'image': {
      'src': "images/example2.png",
      'desc': "example screenshot of a project involving cats",
      'comment': "This is some example work by some cats"
    }
  }];

describe('ExampleWork component', () => {
	let component = shallow(<ExampleWork work={myWork}/>);

	it('Should be a span element', () => {
    expect(component.type()).toEqual('span');
	});

  it('Should contain as many children as there are work examples', () => {
    expect(component.find('ExampleWorkBubble').length).toEqual(myWork.length);
  });

  it('Should allow the modal to open and close', () => {
    component.instance().openModal();
    expect(component.instance().state.modalOpen).toBe(true);

    component.instance().closeModal();
    expect(component.instance().state.modalOpen).toBe(false);
  });

});

describe('ExampleWorkBubble component', () => {
  let mocOpenModalFn = jest.fn();
  let component = shallow(<ExampleWorkBubble example={myWork[1]} openModal={mocOpenModalFn}/>);

  it('should contain a single image element', () => {
    expect(component.find('img').length).toEqual(1);
  });

  it('should have the image src set correctly', () => {
    expect(component.find('img').first().props().src).toEqual(myWork[1].image.src);
  });

  it('should call the openModal handle when clicked', () => {
    component.find('.section__exampleWrapper').simulate('click');
    expect(mocOpenModalFn).toHaveBeenCalled();
  });
})
