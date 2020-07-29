import React from 'react';
import QcNav from './comp/quizCentralNav/QcNav';
import QuizCards from './comp/quizCentralQuizCards/QuizCards'; 
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
