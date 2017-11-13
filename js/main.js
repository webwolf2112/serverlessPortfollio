import React from 'react';
import ReactDom from 'react-dom';
import ExampleWork from './example-work';

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
  }, {
    'title': "My Work 3",
    'image': {
      'src': "images/example3.png",
      'desc': "example screenshot of a project involving other stuff",
      'comment': `This is a mulit line Comment.
                So I have used the back tick`
    }
  }
]

ReactDom.render(<ExampleWork work={myWork}/>, document.getElementById('exampleWork'));
