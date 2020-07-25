import React from 'react';
import Footer from './comp/quizCentralFooter/Footer';
import QcNav from './comp/quizCentralNav/QcNav';
import QuizCards from './comp/quizCentralQuizCards/QuizCards'; 
import './App.css';

function App() {
  return (
    <div className="App">
      <QcNav />
      <QuizCards />
      <Footer />
    </div>
  );
}

export default App;
