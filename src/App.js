import './App.css';
import Navbar from './components/Header/Navbar';
import { PC } from './components/Pc';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';



function App() {
  return (
    <div className="wrapper">
      <Navbar/>
      <div className='canvas-container'>
         <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
          <PC/>
          <OrbitControls/>
      </Canvas>
      </div>
      <div className="wrapper__content">
         <h1 className='noSelect'>Hello, I'm an developer based in Romania!</h1>
      </div>

    </div>
  );
}

export default App;
