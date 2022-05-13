import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../views/Home';
import About from '../views/About';
import Contact from '../views/Contact';
import Detail from '../views/Detail';
import Post from '../views/Post';

function Router() {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/post" element={<Post />} />
            <Route path="/:id" element={<Detail />} />
        </Routes>
    );
}

export default Router;