import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/NavBar";
import About from "./pages/About";
import Article from "./pages/article";
import Blogs from "./pages/blogs";
import Home from "./pages/home";
import NotFound from "./pages/NotFound";
import Footer from "./components/footer.js";
function App() {
  return (
    <Router>
      <Navbar />
      <div className="justify-center">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/article/:name" element={<Article />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
