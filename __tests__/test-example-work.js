import React from 'react';
import { shallow } from 'enzyme';
import ExampleWork from '../js/example-work';
import { configure } from 'enzyme';

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
		console.log(component.debug());
	});
});
