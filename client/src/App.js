import React from 'react';
import QuizHeading from './components/QuizCentralHeader';
import QuizCards from './components/QuizCards'; 
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Test from './components/Test';
import Share from './components/Share';
import './App.css';


function App() {
    return (
        <>
        <Navbar />
        <Test />
        <QuizHeading />
        <QuizCards />
        <Share />
        <Footer />
        </>
    );
}

export default App;
