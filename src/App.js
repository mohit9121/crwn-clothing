import React from 'react';
import './App.css';
import { Homepage } from './pages/Homepage/homepage.component';
import ShopPage from './pages/shop/shop.components';
import {
  // BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from 'react-router-dom';

import { Header } from './components/header-component/header-component';
import { auth } from './firebase/firebase.utils';
import { SignInAndSignUP } from './pages/sign-in-and-sign-up/sign-in-and-sign-up';


class App extends React.Component {
  constructor(){
    super(); 
    this.state ={
      currentUser: null
    }
  }

  unubscribeFromAuth = null; 

  componentDidMount(){
    this.unubscribeFromAuth = auth.onAuthStateChanged(user =>{
      this.setState({currentUser: user}); 
      console.log(user); 
    }); 
  }

  componentWillUnmount(){
    this.unubscribeFromAuth(); 
  }

  render() {
    return (
      <div>
        <Header currentState = {this.state.currentUser} />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route exact path='/shop' element={<ShopPage />} />
          <Route exact path='/signin' element={<SignInAndSignUP />} />
        </Routes>
      </div>
    );
  }
}

export default App;
