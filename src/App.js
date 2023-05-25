import './App.css';
import Navbar from './components/Header/Navbar';
import CanvasComponent from './components/CanvasComponent';
import About from './components/About/About';

function App() {
  return (
    <div className="wrapper">
        <Navbar />
        <CanvasComponent />
        <About/>
    </div>
  );
}

export default App;

