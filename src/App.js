import './App.css';
import LoginForm from './Login';
import RegistrationForm from './Registration'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <LoginForm />
    </div>
  );
}

export default App;