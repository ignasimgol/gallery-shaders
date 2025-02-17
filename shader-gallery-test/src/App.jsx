import { Canvas } from "@react-three/fiber";
import { ScrollControls } from "@react-three/drei";
import Gallery from "./Gallery";

function App() {
  return (
    <Canvas camera={{ position: [0, 0, 3] }}>
      <ScrollControls pages={3} damping={0.1}>
        <Gallery />
      </ScrollControls>
    </Canvas>
  );
}

export default App;