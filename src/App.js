/** @format */

import FirstPage from "./Pages/FirstPage/FirstPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SecondPage from "./Pages/SecondPage/SecondPage";
import NotFoundPage from "./Pages/NotFoundPage";

function App() {
  return (
    <div className=" bg-cover min-h-screen bg-[url('https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?size=626&ext=jpg')]">
      <Router>
        <Routes>
          <Route path="/" element={<FirstPage />} />
          <Route path="/Secondpage" element={<SecondPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
