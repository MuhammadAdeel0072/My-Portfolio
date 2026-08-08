import { useRef, useState, useEffect, Suspense, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const Particles = ({ count = 150 }) => {
  const pointsRef = useRef();

  const seededRandom = (seed) => {
    const x = Math.sin(seed * 12.9898 + 78.233) * 43758.5453;
    return x - Math.floor(x);
  };

  const [positions, colors] = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      positions[i3] = seededRandom(i * 3) * 15 - 7.5;
      positions[i3 + 1] = seededRandom(i * 3 + 1) * 15 - 7.5;
      positions[i3 + 2] = seededRandom(i * 3 + 2) * 15 - 7.5;
      const color = new THREE.Color();
      color.setHSL(seededRandom(i * 3 + 3) * 0.2 + 0.6, 0.8, seededRandom(i * 3 + 4) * 0.3 + 0.5);
      colors[i3] = color.r;
      colors[i3 + 1] = color.g;
      colors[i3 + 2] = color.b;
    }
    return [positions, colors];
  }, [count]);

  useFrame(() => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += 0.001;
      pointsRef.current.rotation.x += 0.0005;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        vertexColors
        transparent
        opacity={0.5}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

const Grid = () => {
  const gridRef = useRef();
  useFrame(() => {
    if (gridRef.current) {
      gridRef.current.position.z = (gridRef.current.position.z + 0.003) % 2;
    }
  });
  return (
    <gridHelper
      ref={gridRef}
      args={[20, 20, 0x6366f1, 0x6366f1]}
      position={[0, -4, -3]}
      cellSize={1}
      cellThickness={0.3}
      sectionSize={3}
      sectionThickness={0.5}
      fadeDistance={15}
      fadeStrength={1}
      infiniteGrid
    />
  );
};

const FloatingShape = ({ position, geometry, color, speed, scale = 1 }) => {
  const meshRef = useRef();
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * speed.x;
      meshRef.current.rotation.y = state.clock.elapsedTime * speed.y;
      meshRef.current.rotation.z = state.clock.elapsedTime * speed.z;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.4) * 0.2;
    }
  });
  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <primitive object={geometry} attach="geometry" />
      <meshBasicMaterial color={color} wireframe transparent opacity={0.12} />
    </mesh>
  );
};

const Rings = () => {
  const ringRef = useRef();
  useFrame((state) => {
    if (ringRef.current) {
      ringRef.current.rotation.x = state.clock.elapsedTime * 0.08;
      ringRef.current.rotation.y = state.clock.elapsedTime * 0.12;
    }
  });
  return (
    <group ref={ringRef} position={[0, 0, 0]}>
      <mesh>
        <torusGeometry args={[2.5, 0.015, 16, 100]} />
        <meshBasicMaterial color={0x6366f1} transparent opacity={0.25} />
      </mesh>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[3.2, 0.015, 16, 100]} />
        <meshBasicMaterial color={0x8b5cf6} transparent opacity={0.15} />
      </mesh>
      <mesh rotation={[Math.PI / 3, Math.PI / 4, 0]}>
        <torusGeometry args={[4, 0.01, 16, 100]} />
        <meshBasicMaterial color={0x6366f1} transparent opacity={0.08} />
      </mesh>
    </group>
  );
};

const CentralObject = ({ mousePosition }) => {
  const meshRef = useRef();
  const innerRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.15;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.z = state.clock.elapsedTime * 0.1;
      meshRef.current.rotation.x += mousePosition.y * 0.3;
      meshRef.current.rotation.y += mousePosition.x * 0.3;
    }
    if (innerRef.current) {
      innerRef.current.rotation.x = -state.clock.elapsedTime * 0.1;
      innerRef.current.rotation.y = -state.clock.elapsedTime * 0.15;
    }
  });

  return (
    <group position={[0, 0, 0]}>
      <mesh ref={meshRef} scale={1.2}>
        <icosahedronGeometry args={[1.2, 1]} />
        <meshBasicMaterial color={0x6366f1} wireframe transparent opacity={0.2} />
      </mesh>
      <mesh ref={innerRef} scale={0.6}>
        <icosahedronGeometry args={[1, 0]} />
        <meshBasicMaterial color={0x8b5cf6} transparent opacity={0.08} />
      </mesh>
      <pointLight position={[0, 0, 0]} intensity={0.5} color={0x6366f1} distance={5} />
    </group>
  );
};

const Scene = ({ mousePosition }) => {
  const groupRef = useRef();
  const icosahedron = useMemo(() => new THREE.IcosahedronGeometry(1, 0), []);
  const torus = useMemo(() => new THREE.TorusGeometry(1, 0.3, 16, 32), []);
  const octahedron = useMemo(() => new THREE.OctahedronGeometry(1, 0), []);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += (mousePosition.x * 0.15 - groupRef.current.rotation.y) * 0.05;
      groupRef.current.rotation.x += (mousePosition.y * 0.1 - groupRef.current.rotation.x) * 0.05;
    }
  });

  return (
    <>
      <ambientLight intensity={0.05} />
      <pointLight position={[10, 10, 10]} intensity={0.8} color={0x6366f1} />
      <pointLight position={[-10, -10, -10]} intensity={0.4} color={0x8b5cf6} />
      <pointLight position={[0, 10, 0]} intensity={0.2} color={0x6366f1} />

      <group ref={groupRef}>
        <FloatingShape position={[4, 2, -3]} geometry={icosahedron} color={0x6366f1} speed={{ x: 0.1, y: 0.15, z: 0.05 }} scale={1.3} />
        <FloatingShape position={[-3, -1, -2]} geometry={torus} color={0x8b5cf6} speed={{ x: 0.08, y: 0.12, z: 0.1 }} scale={0.7} />
        <FloatingShape position={[-4, 3, -4]} geometry={octahedron} color={0x6366f1} speed={{ x: 0.12, y: 0.08, z: 0.06 }} scale={1} />
        <FloatingShape position={[3, -2, -5]} geometry={icosahedron} color={0x8b5cf6} speed={{ x: 0.05, y: 0.1, z: 0.08 }} scale={0.5} />
      </group>

      <CentralObject mousePosition={mousePosition} />
      <Particles count={150} />
      <Grid />
      <Rings />
    </>
  );
};

const ThreeHero = () => {
  const mousePosition = useRef({ x: 0, y: 0 });
  const [sceneMouse, setSceneMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      mousePosition.current = {
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1,
      };
      setSceneMouse({ ...mousePosition.current });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 75 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <Scene mousePosition={sceneMouse} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ThreeHero;
