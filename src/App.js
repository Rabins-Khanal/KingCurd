import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import LoginForm from './Login';
import RegistrationForm from './Registration';
import Logo from './images/icon.png';

export default function App() {
  return (
    <div className="App">
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>
      <div>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegistrationForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
