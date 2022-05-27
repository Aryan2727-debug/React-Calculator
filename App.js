import './App.css';
import Navbar from './Navbar';
import About from './About';
import Textform from './Textform';

function App() {
  return (
      <>

      <Navbar home="Home"/>

      <div className="container">
        <About/>
      </div>
      
      <br/>
      <br/>
      
      <div className="container">
        <Textform/>
      </div>
      
      </>
  );
}

export default App;
