import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from '@react-three/drei';
import Loader from '../Loader';

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={2.5} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 2]} />
        <meshStandardMaterial
          color="#3d3d3d"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          flatShading
          map={decal}
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon, name }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full h-28">
        <Canvas frameloop="always" gl={{ preserveDrawingBuffer: true }}>
          <Suspense fallback={<Loader />}>
            <OrbitControls enableZoom={false} position0={0} />
            <Ball imgUrl={icon} />
          </Suspense>
          <Preload all />
        </Canvas>
      </div>
      <p className="mt-2 text-sm text-white text-center">{name}</p>
    </div>
  );
};

export default BallCanvas;