import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import NavbarComp from './components/NavbarComp';
import Footer from './components/Footer';




function App() {
  return (
    <>
    <div className="App">
      <NavbarComp/>
    </div>
    <div className="picture-card">
          <div>
            <img src='https://images.unsplash.com/photo-1651594234406-35a5155463d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'/>

            <h5>Date: 8 May 2022</h5>
            <h5>Like: 220</h5>
            <h5>Comment:Very Good</h5>

          </div>
          <div>
            <img src='https://images.unsplash.com/photo-1579032327795-e3cb02822e38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80'/>
            <h5>Date: 9 May 2022</h5>
            <h5>Like: 150</h5>
            <h5>Comment: excellent</h5>
          </div>
          <div>
            <img src='https://images.unsplash.com/photo-1579033461380-adb47c3eb938?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80'/>
            <h5>Date: 14 May 2022</h5>
            <h5>Like: 180</h5>
            <h5>Comment: this is best place </h5>
          </div>

          <div>
            <img src='https://images.unsplash.com/photo-1491884662610-dfcd28f30cfb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'/>
            <h5>Date: 14 May 2022</h5>
            <h5>Like: 180</h5>
            <h5>Comment: this is best place </h5>
          </div>
          
    </div>
  
    
        <p>
        <Footer/>
        </p>
    </>
  
  );
}




export default App;
