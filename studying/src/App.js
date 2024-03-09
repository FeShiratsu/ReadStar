import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Link,Routes,Route } from 'react-router-dom';
import Header from './Layout/Header';
import Footer from './Layout/Footer';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';

function App() {
  return (
    
    <Router>
      <Header/>
      <Routes>
        <Route exact path='/' element={<Home></Home>}/>
        <Route exact path='/register' element={<Register></Register>}/>
        <Route exact path='/login' element={<Login></Login>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
