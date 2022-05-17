import React from 'react';
import Header from '../components/Header';

function About() {
    return (
        <div>
            <Header headerTitle="About Page" subHeading="Information about our company, team, and services"
                headerStyle={{
                    backgroundImage: `url('assets/img/post-bg.jpg')`,
                }}
            />
            <h1 className='text-center mb-5'>About Page</h1>
        </div>
    );
}

export default About;