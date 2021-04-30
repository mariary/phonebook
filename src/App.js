import React from 'react';
import './App.css'
import {Posts} from "./components/Posts/Posts";
import {FetchedPosts} from './components/FetchedPosts/FetchedPosts'

function App() {
  return (
    <div className="container">
        <header>
            Телефонная книга
        </header>
        <div className="content">
            <Posts/>
            <FetchedPosts/>
        </div>
    </div>
  );
}

export default App;
