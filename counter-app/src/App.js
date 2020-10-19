import React from 'react';
import NavBar from './components/navbar';
import Counter from './components/counter';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.scss';

function App() {
  return (
    <div>
      <NavBar />
      <Counter />
    </div>
  );
}

export default App;
