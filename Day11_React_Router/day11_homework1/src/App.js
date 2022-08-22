
import './App.css';
import { Routes, Route, Link , Outlet } from "react-router-dom";

import Home from './Home';
import Portfolio from './Portfolio';
import AboutUs from './AboutUs';
import Contact from './Contact';

function App() {
  return (
    <div>
      <h1>Web Portfolio</h1>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='Portfolio' element={<Portfolio/>}/>
          <Route path='AboutUs' element={<AboutUs/>}/>
          <Route path='Contact' element={<Contact/>} />
        </Route>
      </Routes>
      <hr/>
    </div>

  );
}

function Layout() {
  return(
      <div>
          <nav>
              <ul>
                  <li><Link to="/">Home</Link></li> 
                  <li><Link to="/Portfolio">Portfolio</Link></li>
                  <li><Link to="/AboutUs">About Us</Link></li>
                  <li><Link to="/Contact">Contact</Link></li>
              </ul>
          </nav>
          <hr/>
          <Outlet />
      </div>
  )
}

export default App;
