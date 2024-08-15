import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './Pages/Navbar/Navbar';
import Main from './Pages/Main/Main';
import About from './Pages/About/About';
import Login from './Pages/Loginpage/Login';
import Blog from './Pages/BlogPage/Blog'
import Footer from './Pages/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route element={<Main />} path='/' />
        <Route element={<About />} path='/about' />
        <Route element={<Login />} path='/login' />
        <Route element={<Blog />} path='/blog' />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
