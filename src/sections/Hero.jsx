import {Canvas} from "@react-three/fiber";
import {PerspectiveCamera} from "@react-three/drei";
import OfficeRoom from "../components/OfficeRoom.jsx";
import {Suspense} from "react";
import CanvasLoader from "../components/CanvasLoader.jsx";
// import { useControls} from "leva";
import {useMediaQuery} from "react-responsive";
import {calculateSizes} from "../constants/index.js";
import Target from "../components/Target.jsx";
import ReactLogo from "../components/ReactLogo.jsx";
import Cube from "../components/Cube.jsx";
import Rings from "../components/Rings.jsx";
import HeroCamera from "../components/HeroCamera.jsx";
import Button from "../components/Button.jsx";
import About from "./About.jsx";
import GlitchText from "../components/HeroTextDesign.jsx";
import TrueFocus from "../components/HeroTextDesign.jsx";
import ScrollReveal from "../components/ScrollReveal.jsx";
import SplitText from "../components/SplitText.jsx";
import ShinyText from "../components/ShinyText.jsx";
import GradientText from "../components/HeroTextDesign.jsx";

const Hero = () => {
    // const x = useControls('OfficeRoom', {
    //     positionX: {
    //         value: 0,
    //         min: -10,
    //         max: 10
    //     },
    //     positionY: {
    //         value: 0,
    //         min: -10,
    //         max: 10
    //     },
    //     positionZ: {
    //         value: 0,
    //         min: -10,
    //         max: 10
    //     },
    //     rotationX: {
    //         value: 0,
    //         min: -10,
    //         max: 10
    //     },
    //     rotationY: {
    //         value: 0,
    //         min: -10,
    //         max: 10
    //     },
    //     rotationZ: {
    //         value: 0,
    //         min: -10,
    //         max: 10
    //     },
    //     scale: {
    //         value: 1,
    //         min: -10,
    //         max: 10
    //     }
    // });

    const isSmall = useMediaQuery({maxWidth: 440});
    const isMobile = useMediaQuery({maxWidth: 768});
    const isTablet = useMediaQuery({minWidth: 768, maxWidth: 1024});

    const sizes = calculateSizes(isSmall, isMobile, isTablet);

    const handleAnimationComplete = () => {
        console.log('All letters have animated!');
    };

    return (
        <section className="min-h-screen w-full flex flex-col relative" id="home">
            <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
                <p className="sm:text-3xl text-xl font-medium
                text-white text-center font-generalsans">
                    {/*<ShinyText text="Hi, I am Sabari" disabled={false} speed={3} className='custom-class' />*/}


                    <GradientText
                        colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                        animationSpeed={8}
                        showBorder={false}
                        className=""
                    >
                        Hi, I am Sabari
                    </GradientText>

                    <span className="waving-hand ">👋🏻</span>
                </p>

                    <SplitText
                        text="MERN Stack Developer"
                        className="hero_tag text-green-600"
                        delay={150}
                        animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                        animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                        easing="easeOutCubic"
                        threshold={0.2}
                        rootMargin="-50px"
                        onLetterAnimationComplete={handleAnimationComplete}
                    />
            </div>

            <div className="size-full absolute inset-0">
                {/*<Leva/>*/}
                <Canvas className="size-full">
                    <Suspense fallback={<CanvasLoader/>}>


                        <PerspectiveCamera makeDefault position={[0, 0, 30]}/>

                        <HeroCamera isMobile={isMobile}>
                            <OfficeRoom
                                // scale={2}
                                position={sizes.deskPosition}
                                rotation={[0, 0, 0]}
                                scale={sizes.deskScale}
                            />
                        </HeroCamera>

                        <group>
                            <Target position={sizes.targetPosition}/>
                            <ReactLogo position={sizes.reactLogoPosition}/>
                            <Cube position={sizes.cubePosition}/>
                            <Rings position={sizes.ringPosition}/>
                        </group>

                        <ambientLight intensity={2}/>
                        <directionalLight position={[10, 50, 10]} intensity={5}/>
                        {/*<feDropShadow />*/}
                    </Suspense>
                </Canvas>
            </div>

            <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
                <a href="#about" className="w-fit">
                    <Button name="Let's work together" isBeam
                            containerClass="sm:w-fit w-full sm:min-w-96" />
                </a>
            </div>
        </section>
    )
}
export default Hero
