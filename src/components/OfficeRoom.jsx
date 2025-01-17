import {useGLTF, useTexture} from '@react-three/drei';
import {useEffect, useRef} from "react";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";

const OfficeRoom = (props) => {
    const officeRoomRef = useRef();

    useGSAP(() => {
        gsap.to(officeRoomRef.current.position, {
            z: officeRoomRef.current.position.z + 0.5,
            duration: 2,
            repeat: -1,
            yoyo: true,
        })
    })

    const {nodes, materials} = useGLTF('/models/mac-draco.glb');

    const monitorTexture = useTexture("textures/desk/monitor.png");

    const screenTexture = useTexture("https://images.unsplash.com/photo-1687603827201-922149337146?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHJlYWN0JTIwanN8ZW58MHx8MHx8fDA%3D");

    useEffect(() => {
        if (screenTexture) {
            screenTexture.flipY = false;
            screenTexture.needsUpdate = true;
        }
    }, [screenTexture]);

    return (
        <group {...props} ref={officeRoomRef} dispose={null}>
            <group position={[0.002, -0.038, 0.414]} rotation={[0.014, 0, 0]}>
                <group position={[0, 2.965, -0.13]} rotation={[Math.PI / 2, 0, 0]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube008.geometry}
                        material={materials.aluminium}
                    >
                        <meshMatcapMaterial map={monitorTexture} flipY={false}/>
                    </mesh>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube008_1.geometry}
                        material={materials['matte.001']}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Cube008_2.geometry}
                        material={materials['screen.001']}
                    >
                        <meshMatcapMaterial map={screenTexture}/>
                    </mesh>
                </group>
            </group>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.keyboard.geometry}
                material={materials.keys}
                position={[1.793, 0, 3.451]}
            />
            <group position={[0, -0.1, 3.394]}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube002.geometry}
                    material={materials.aluminium}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Cube002_1.geometry}
                    material={materials.trackpad}
                />
            </group>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.touchbar.geometry}
                material={materials.touchbar}
                position={[0, -0.027, 1.201]}
            />
        </group>
    )
}

useGLTF.preload('/models/mac-draco.glb');

export default OfficeRoom;