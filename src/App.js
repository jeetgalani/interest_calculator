import React from 'react';
import logo from './logo.svg';
import './App.css';
import Body from './component/body';
import Header from './component/header';
import moneyImage from './component/clipArtKey.png';



const Footer = ()=> (<div className="Footer"> &copy; 2020</div>)


function App() {
  return (
    <div className="App">
    <Header />  
    <Body />
    <img className='image' src= {moneyImage}/> 
    <Footer />
    </div>
  );
}

export default App;
