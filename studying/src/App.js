
import { BrowserRouter as Router,Link,Routes,Route } from 'react-router-dom';
import Header from './Layout/Header';
import Footer from './Layout/Footer';
import Home from './Pages/Home';
import './App.css';
import Login from './Pages/Login';
import Register from './Pages/Register';
import SeeBook from './Pages/SeeBook';
function App() {
  return (
    
    <Router>
      <Header/>
      <Routes>
        <Route  exact path="/" element={<Home></Home>}></Route>
        <Route   path="/register" element={<Register></Register>}></Route>
        <Route   path="/login" element={<Login></Login>}></Route>
        <Route   path="/bookShow" element={<SeeBook></SeeBook>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
