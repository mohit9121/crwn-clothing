import logo from './logo.svg';
import './App.css';
import { Homepage } from './pages/Homepage/homepage.component';
import ShopPage from './pages/shop/shop.components';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';


function App() {
  return (
    <div>

      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route exact path='/shop' element={<ShopPage/>} />
      </Routes>
    </div>
  );
}

export default App;
