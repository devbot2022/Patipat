import './App.css';
import React from 'react';
import HeaderComponent from './Header';
import ContentComponent from './Content';
import FooterComponent from './Footer';



//1.1 Class Component
class App extends React.Component {

  render(){
    return(
      <>
        <HeaderComponent/>
        <ContentComponent/>
        <FooterComponent/>
     </>
    );
  }

}

export default App;
