import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Home from "./routes/Home";
import HomeIndex from "./routes/Home/HomeIndex";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} >
          <Route index element={<Navigate to="/home" /> } />
          <Route path="home" element={<HomeIndex />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
