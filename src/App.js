import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header";
import Home from "./components/home";
import Login from "./components/login";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* Login Route */}
          <Route path="/" element={<Login />} />
          
          {/* Home Route */}
          <Route
            path="/home"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
