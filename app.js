import React, { Fragment } from 'react';
import ReactDom from 'react-dom';
import Header from './Components/Header/Header';
import ExampleWork from './Components/example-work';
import styles from'./styles/main.scss';

const myWork = [
  {
    'title': "My Work 1",
    'desc': "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sinm id est laborum.",
    'href': "example.com",
    'image': {
      'src': "images/example1.png",
      'desc': "example screenshot of a project involving code",
      'comment': "This is some example work by some people"
    }
  }, {
    'title': "My Work 2",
    'href': "example.com",
    'desc': "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sinm id est laborum.",
    'image': {
      'src': "images/example2.png",
      'desc': "example screenshot of a project involving cats",
      'comment': "This is some example work by some cats"
    }
  }, {
    'title': "My Work 3",
    'href': "example.com",
    'desc': "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sinm id est laborum.",
    'image': {
      'src': "images/example3.png",
      'desc': "example screenshot of a project involving other stuff",
      'comment': `This is a mulit line Comment.
                So I have used the back tick`
    }
  }
]

const App = () => {
  return(
      <Fragment>
        <Header />
        <ExampleWork work={myWork}/>
      </Fragment>
    )
}


ReactDom.render(<App />, document.getElementById('App'));
