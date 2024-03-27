
import { BrowserRouter as Router,Link,Routes,Route } from 'react-router-dom';
import Header from './Layout/Header';
import Footer from './Layout/Footer';
import Home from './Pages/Home';
import './App.css';
function App() {
  return (
    
    <Router>
      <Header/>
      <Routes>
        <Route  exact path="/" element={<Home></Home>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
