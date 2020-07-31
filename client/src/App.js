import React from 'react';
import QcHeading from './Components/quizCentralNav/QcHeading';
import QuizCards from './Components/quizCentralQuizCards/QuizCards'; 
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Test from './components/Test';
import './App.css';


function App() {
    return (
        <>
        <Navbar />
        <Test />
        <Footer />
        </>
    );
}

export default App;
