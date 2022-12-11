import React from "react";

const Education = ({ font }) => {
  return (
    <>
      <mesh rotation={[0, Math.PI, 0]} position={[40, 0.5, 90]}>
        <textBufferGeometry
          attach="geometry"
          args={["Education", { font, size: 3, height: 1 }]}
        />
        <meshBasicMaterial attach="material" color="#fafafa" metalness={1} />
      </mesh>
      <group>
        <mesh
          rotation={[Math.PI / 2 - Math.PI / 8, Math.PI, 0]}
          position={[35, 0.1, 84]}
        >
          <textBufferGeometry
            attach="geometry"
            args={["Licence", { font, size: 1, height: 0.1 }]}
          />
          <meshBasicMaterial attach="material" color="#fafafa" metalness={1} />
        </mesh>
        <mesh rotation={[Math.PI / 2, Math.PI, 0]} position={[37, 0.1, 81]}>
          <textBufferGeometry
            attach="geometry"
            args={[
              "Dev Web And Multimedia \n Juin 2022-2023",
              { font, size: 1, height: 0.1 },
            ]}
          />
          <meshBasicMaterial attach="material" color="#fafafa" metalness={1} />
        </mesh>
        <mesh
          rotation={[Math.PI / 2 - Math.PI / 8, Math.PI, 0]}
          position={[35, 0.1, 69]}
        >
          <textBufferGeometry
            attach="geometry"
            args={["Bac", { font, size: 1, height: 0.1 }]}
          />
          <meshBasicMaterial attach="material" color="#fafafa" metalness={1} />
        </mesh>
      </group>
      <group>
        <mesh rotation={[Math.PI / 2, Math.PI, 0]} position={[37, 0.1, 66]}>
          <textBufferGeometry
            attach="geometry"
            args={["B.SVT \n Juin 2019-2020", { font, size: 1, height: 0.1 }]}
          />
          <meshBasicMaterial attach="material" color="#fafafa" metalness={1} />
        </mesh>
      </group>
    </>
  );
};

export default Education;
