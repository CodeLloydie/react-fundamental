import React from 'react';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Footer from './Components/Footer';

// rsc
const App = () => {
  let grade = 60
  return (
    <div>
      {
        grade >= 75 ? <h1>passed</h1>
        : 
        <h1>failed</h1>
      }
    </div>
  );
};

export default App;