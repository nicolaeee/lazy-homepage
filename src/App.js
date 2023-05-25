import './App.css';
import Navbar from './components/Header/Navbar';
import CanvasComponent from './components/CanvasComponent';

function App() {
  return (
    <div className="wrapper">
      <div className="navbar-wrapper">
        <Navbar />
      </div>
      <div className="canvas-wrapper">
        <CanvasComponent />
      </div>
      <div className="wrapper__content">
        <h1 className='noSelect'>Hello, I'm a developer based in Romania!</h1>
      </div>
    </div>
  );
}

export default App;

