//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Home from './pages/Home';
import Tools from './pages/Tools';
import Photo from './pages/Photo';
import AI from './pages/AI';
import Blog from './pages/Blog';
import Login from './pages/Login';
import Footer from './Footer';

function App() {
  return (
  <div className="flex flex-col min-h-screen">
    <Router>
      <Header />
      <main className="flex-grow">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/photo" element={<Photo />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      </main>
      <Footer />
    </Router>
  </div>);
}

export default App;
