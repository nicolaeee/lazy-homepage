import './App.css';
import Navbar from './components/Header/Navbar';
import { PC } from './components/Pc';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Suspense } from 'react';



function App() {
  return (
    <div className="wrapper">
      <Navbar/>
      <div className='canvas-container'>
         <Canvas>
         <OrbitControls enableZoom={true}/>
        <ambientLight intensity={0.5}/>
        <directionalLight position={[-2,5,2]} intensity={1}/>
        <Suspense fallback={null}>
          <PC/>
        </Suspense>
      </Canvas>
      </div>
      <div className="wrapper__content">
         <h1 className='noSelect'>Hello, I'm an developer based in Romania!</h1>
      </div>

    </div>
  );
}

export default App;
