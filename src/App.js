
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Navbar } from 'react-bootstrap';
import { useHistory, withRouter } from 'react-router-dom';
import './App.css';
import { Routes } from './Routing';
const blogsInfo = [
  {
    id: 1,
    title: 'Testing in React (Jest & Enzyme)',
    img: 'assets/images/react-testing.jpg',
    link: 'https://arvind625.medium.com/testing-in-react-jest-enzyme-c8b39cda88a1'
  },
  {
    id: 2,
    title: 'Thunk function in Redux [Redux Thunk]',
    img: 'assets/images/reduxAsyncDataFlowDiagram.gif',
    link: 'https://arvind625.medium.com/thunk-function-in-redux-redux-thunk-de5950d6abbe'
  },
  {
    id: 3,
    title: 'Difference b/w null and undefined in javascript',
    img: 'assets/images/nullvsundefined.jpg',
    link: 'https://arvind625.medium.com/difference-b-w-null-and-undefined-in-javascript-2161b079cd86'
  },
  {
    id: 4,
    title: 'Topic wise interview problems links & Resources',
    img: 'assets/images/topic-wise-problems.jpg',
    link: 'https://arvind625.medium.com/topic-wise-interview-problems-links-6b9547cb9046'
  },
  {
    id: 5,
    title: 'Modify bit of a no. “n” at position “p” by “value”(0,1)',
    img: 'assets/images/bits.jpg',
    link: 'https://arvind625.medium.com/modify-bit-of-a-no-n-at-position-p-by-value-0-1-6ccba7ce5f32'
  },
  {
    id: 6,
    title: 'Difference b/w Padding & Margin in CSS',
    img: 'assets/images/padding-margins.jpg',
    link: 'https://arvind625.medium.com/difference-b-w-padding-margin-in-css-6bef23ef7d9b'
  }
];

function App() {
  const [blogs, setBlogs] = useState(blogsInfo);
  const { push } = useHistory();
  return (
    <div className="App">
      <Navbar className="sticky-top" bg="light" expand="lg" style={{ height: '50px' }}>
        <Navbar.Brand>
          <img
            src="/assets/logo/bloglogo.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt=""
          />
        </Navbar.Brand>
        <Navbar.Brand className='Navbar' onClick={() => push('/')}>My Resume</Navbar.Brand>
        <Navbar.Brand className='Navbar' onClick={() => push('/blogs')}>My Blogs</Navbar.Brand>
        <Navbar.Brand className='Navbar' onClick={() => push('/blog/new')}>New Blog</Navbar.Brand>
      </Navbar>
      <Routes blogs={blogs} setBlogs={setBlogs} />
    </div >
  );
}

export default withRouter(App);
