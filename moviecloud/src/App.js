import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import PrivateRouter from "./components/PrivateRouter";
import Main from "./pages/Main/Main";

import MovieDetail from "./pages/MovieDetail/MovieDetail";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login/Login";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/movies" element={<Main />} />
        <Route path="/movies/:id" element={<PrivateRouter />}>
          <Route path="" element={<MovieDetail />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/movies/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
