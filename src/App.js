
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar';
import Home from "./Components/Home"
import About from './Components/About'
import Vegei from './Components/Vegei';
import Blog from './Components/Blog';
import Contact from "./Components/Contact";
import Login from './Components/Login';
import Signup from './Components/Signup';
import Readmore from './Components/Readmore';
import Cart from './Components/Cart';


function App() {
  return (
     
     <Router>
<Navbar/>
<Routes>
        <Route path="/" element={ <Home />}/>
           
          <Route path="/about" exact element={<About />} />
          { /* <Route path="/shop-now" exact element={< ShopNow/>} /> */}
          <Route path="/Vegei" exact element={<Vegei />} />
          <Route path="/blog" exact element={<Blog />} />
          <Route path="/contact" exact element={<Contact />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/signup" exact element={<Signup />} />
          <Route path="/readmore" exact element={<Readmore />} />
          <Route path="/cart" exact element={<Cart />} />
        </Routes>
      </Router>

  );
}


export default App;
