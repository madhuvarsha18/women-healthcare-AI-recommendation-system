import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import CycleTracker from "./pages/CycleTracker";

import Assessment from "./pages/Assessment";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        
        
        
        <Route path="/cycle-tracker" element={<CycleTracker />} />
        <Route path="/assessment" element={<Assessment /> } />

  
      </Routes>
    </BrowserRouter>
  );
}

export default App;