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

	it("Should be a 'section' element", () => {
    expect(component.type()).toEqual('section');
	});

  it("Should contain as many children as there are work examples", () => {
    expect(component.find('ExampleWorkBubble').length).toEqual(myWork.length);
  });

});

describe('ExampleWorkBubble component', () => {
  let component = shallow(<ExampleWorkBubble example={myWork[1]}/>);
  let images = component.find('img');


  it('should contain a single image element', () => {
    expect(component.find('img').length).toEqual(1);
  });

  it('should have the image src set correctly', () => {
    expect(component.find('img').first().props().src).toEqual(myWork[1].image.src);
  });
})
