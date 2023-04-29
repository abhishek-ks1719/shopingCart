import './App.css';
import Home from './Pages/Home';
import NavBar from './Components/NavBar';
import Cart from './Pages/Cart';
import { Routes,Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/shopingCart/Home/' exact element={<Home/>}></Route>
        <Route path='/shopingCart/Home/yourcart/' element={<Cart/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
