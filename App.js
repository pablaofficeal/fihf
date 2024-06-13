import React from 'react';
import './App.css';
import LoginForm from './components/LoginForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Музыкальный дистрибьютор</h1>
      </header>
      <main className="App-main">
        <LoginForm />
      </main>
    </div>
  );
}

export default App;
