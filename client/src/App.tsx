import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import UserSettings from './pages/UserSettings';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/settings" element={<UserSettings />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;