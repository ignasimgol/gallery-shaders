import { Canvas } from "@react-three/fiber";
import { ScrollControls } from "@react-three/drei";
import Gallery from "./Gallery";
import Navbar from "./components/Navbar";
import Logo from "./components/Logo";

function App() {
  return (
    <>
      <Navbar />
      <Logo />
      <Canvas camera={{ position: [0, 0, 3] }}>
        <ScrollControls pages={8} damping={0.3}>
          <Gallery />
        </ScrollControls>
      </Canvas>
    </>
  );
}

export default App;