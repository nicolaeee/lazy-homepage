import './App.css';
import Navbar from './components/Header/Navbar';

function App() {
  return (
    <div className="wrapper">
      <Navbar/>
      <div className="wrapper__content">
         <h1 className='noSelect'>Hello, I'm an developer based in Romania!</h1>
      </div>
    </div>
  );
}

export default App;
