import React from 'react';
import QuizHeading from './Components/quizCentralHeader';
import QuizCards from './Components/quizCards'; 
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
