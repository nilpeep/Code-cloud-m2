import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Projects from "./pages/projects/Projects";
import NotFound from "./components/error/NotFound";
import Layout from "./components/Layout";
function App() {
  return (
    <BrowserRouter>

        <Routes>
          <Route
            path=""
            element={
              <Layout/>
            }
          >
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contacts" element={<Contact />} />
          </Route>     

          <Route path="*" element={<NotFound />} />
        </Routes>

    </BrowserRouter>
  );
}

export default App;
