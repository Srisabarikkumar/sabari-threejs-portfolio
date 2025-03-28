import {Canvas} from "@react-three/fiber";
import {certifications, workExperiences} from "../constants/index.js";
import {OrbitControls} from "@react-three/drei";
import CanvasLoader from "../components/CanvasLoader.jsx";
import Developer from "../components/Developer.jsx";
import {Suspense, useState} from "react";
// import {ScrollRevealUtil} from "./Projects.jsx";
import DecryptedText from "../components/DecryptedText.jsx";
import BlurText from "../components/BlurText.jsx";
import AnimatedContent from "../components/AnimatedContent.jsx";


const handleAnimationComplete = () => {
    console.log('Animation completed!');
};

const Experience = () => {
    const [animationName, setAnimationName] = useState("idle");

    return (
        <section className="c-space my-20" id="work">
            <div className="w-full text-white-600">

                <h3>
                    {/*<ScrollRevealUtil text="My Work" textClassName="head-text"/>*/}
                    <BlurText
                        text="My Work"
                        delay={150}
                        animateBy="words"
                        direction="top"
                        onAnimationComplete={handleAnimationComplete}
                        className="text-2xl mb-8"
                    />
                </h3>

                    <AnimatedContent
                        distance={150}
                        direction="horizontal"
                        reverse={false}
                        config={{ tension: 80, friction: 20 }}
                        initialOpacity={0.2}
                        animateOpacity
                        scale={0.8}
                        threshold={0.2}
                    >
                <div className="work-container">
                    <div className="work-canvas">
                        <Canvas>
                            <ambientLight intensity={7}/>
                            <spotLight position={[10, 10, 10]} angle={0.15}
                                       penumbra={1}/>
                            <directionalLight position={[10, 10, 10]} intensity={1}/>
                            <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2}/>

                            <Suspense fallback={<CanvasLoader/>}>
                                <Developer position-y={-3} scale={3}
                                           animationName={animationName}/>
                            </Suspense>
                        </Canvas>
                    </div>

                    <div className="work-content">
                        <div>
                            <h3 className="text-2xl font-bold pt-5 c-space">Experience</h3>
                        </div>
                        <div className="sm:py-10 py-5 sm:px-5 px-2.5">
                            {workExperiences.map((item) => (
                                <div className="work-content_container group"
                                     key={item.id}
                                     onClick={() =>
                                         setAnimationName(item.animation.toLowerCase())}
                                     onPointerOver={() =>
                                         setAnimationName(item.animation.toLowerCase())}
                                     onPointerOut={() =>
                                         setAnimationName("idle")}
                                >
                                    <div className="flex flex-col h-full
                                    justify-start items-center py-2">
                                        <div className="work-content_logo">
                                            <img src={item.icon} alt="icon" className="size-full"/>
                                        </div>
                                        <div className="work-content_bar"/>
                                    </div>

                                    <div className="sm:p-5 px-2.5 py-5">
                                        <p className="font-bold text-white-800">{item.name}</p>
                                        <p className="text-sm mb-5">{item.pos} -- {item.duration}</p>
                                        <p className="group-hover:text-white transition
                                        ease-out duration-500">
                                            <DecryptedText
                                                text={item.title}
                                                animateOn="hover"
                                                speed={100}
                                                revealDirection="center"
                                                useOriginalCharsOnly={true}
                                            />
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold c-space">Certifications</h3>
                        </div>

                        <div>
                            <div className="sm:py-10 py-5 sm:px-5 px-2.5">

                                {certifications.map((item) => (
                                    <div className="work-content_container group"
                                         key={item.id}
                                         onClick={() =>
                                             setAnimationName(item.animation.toLowerCase())}
                                         onPointerOver={() =>
                                             setAnimationName(item.animation.toLowerCase())}
                                         onPointerOut={() =>
                                             setAnimationName("idle")}
                                    >
                                        <div className="flex flex-col h-full
                                    justify-start items-center py-2">
                                            <div className="work-content_logo">
                                                <img src={item.icon} alt="icon" className="size-full"/>
                                            </div>
                                            <div className="work-content_bar"/>
                                        </div>

                                        <div className="sm:p-5 px-2.5 py-5">
                                            <p className="font-bold text-white-800">{item.name}</p>
                                            <p className="text-sm mb-5">{item.org} -- {item.duration}</p>
                                            <p className="group-hover:text-white transition
                                        ease-out duration-500">
                                                <DecryptedText
                                                    text={item.title}
                                                    animateOn="hover"
                                                    speed={100}
                                                    revealDirection="center"
                                                    useOriginalCharsOnly={true}
                                                />

                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                    </AnimatedContent>
            </div>
        </section>
    )
}
export default Experience
