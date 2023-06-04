import { BrowserRouter, Link, Route, Routes, Navigate } from "react-router-dom";
import Bozic from "./bozic/Bozic";
import Home from "./Home";
import Main from "./matrice/components/Main";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route exact path="/bozic" component={() => { window.location.href = "src/bozic/bozic.html" }} /> */}
          {/* <Route exact path="/bozic" element={<>bozic</>} /> */}
          {/* <Route path="/bozic" element={window.location.href = "src/bozic/bozic.html"} /> */}
          <Route path="/bozic" element={<Bozic />} />
          <Route path="/matrice" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </div >
  );
}

export default App;
