
import './App.css';
import HeaderComponent from './Header';
import ContentComponent from './Content';
import FooterComponent from './Footer';


//1.2 Function Component 
function App() {
  return (
    <div className="App">
      <HeaderComponent/>
      <ContentComponent/>
      <FooterComponent/>
    </div>
  );
}

export default App;
