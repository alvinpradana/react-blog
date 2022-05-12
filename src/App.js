import React from 'react';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Router from './router';

function App() {
    return (
        <div>
            <Navigation />
            <Router />
            <Footer />
        </div>
    );
}

export default App;