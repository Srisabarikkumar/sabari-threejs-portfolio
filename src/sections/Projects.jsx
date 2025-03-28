import {myProjects} from "../constants/index.js";
import {Suspense, useEffect, useRef, useState} from "react";
import {Canvas} from "@react-three/fiber";
import {Center, OrbitControls} from "@react-three/drei";
import CanvasLoader from "../components/CanvasLoader.jsx";
import DemoComputer from "../components/DemoComputer.jsx";
import ScrollReveal from "../components/ScrollReveal.jsx";
import ShinyText from "../components/ShinyText.jsx";
import DecryptedText from "../components/DecryptedText.jsx";
import BlurText from "../components/BlurText.jsx";
import AnimatedContent from "../components/AnimatedContent.jsx";
import ProjectIcons from "../components/AnimatedIcons/ProjectIcons.jsx";

const projectCount = myProjects.length;

export const ScrollRevealUtil = ({text, textClassName}) => {
    return (
        <ScrollReveal
            baseOpacity={0.1}
            enableBlur={true}
            baseRotation={10}
            blurStrength={4}
            textClassName={textClassName}
        >
            {text}
        </ScrollReveal>
    )
}

const handleAnimationComplete = () => {
    console.log('Animation completed!');
};


const Projects = () => {
    const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

    const currentProject = myProjects[selectedProjectIndex];

    const handleNavigation = (direction) => {
        setSelectedProjectIndex((prevIndex) => {
            if (direction === "previous") {
                return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
            } else {
                return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
            }
        });
    }

    return (
        <section className="c-space my-20" id="projects">
            {/*<ScrollRevealUtil text="My Projects" textClassName="head-text" />*/}
            <BlurText
                text="My Projects"
                delay={150}
                animateBy="words"
                direction="top"
                onAnimationComplete={handleAnimationComplete}
                className="head-text"
            />

            <AnimatedContent
                distance={150}
                direction="horizontal"
                reverse={true}
                config={{tension: 80, friction: 20}}
                initialOpacity={0.2}
                animateOpacity
                scale={0.9}
                threshold={0.2}
            >
                <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
                    <div className="flex flex-col gap-5 relative sm:p-10 py-10 px-5
                shadow-2xl shadow-black-200">
                        <div className="absolute top-0 right-0">
                            <img src={currentProject.spotlight} alt="spotlight"
                                 className="w-full h-96 object-cover rounded-xl"/>
                        </div>

                        <div>
                            {/*<img src={currentProject.logo} alt="logo" className="size-10 shadow-sm"/>*/}
                            <ProjectIcons logo={currentProject.logo}/>
                        </div>


                        <div className="flex flex-col gap-5 text-white-600">
                            <p className="text-white text-2xl font-semibold animatedText">

                                <ShinyText text={currentProject.title} disabled={false} speed={3}
                                           className='custom-class'/>

                            </p>
                            <p className="animatedText">
                                {/*<div style={{marginTop: '4rem'}}>*/}
                                <DecryptedText
                                    text={currentProject.desc}
                                    animateOn="view"
                                    speed={100}
                                    revealDirection="center"
                                    useOriginalCharsOnly={true}
                                />
                                {/*</div>*/}

                            </p>
                            <p className="animatedText">
                                <DecryptedText
                                    text={currentProject.subdesc}
                                    animateOn="view"
                                    speed={100}
                                    revealDirection="center"
                                    useOriginalCharsOnly={true}
                                />
                            </p>
                        </div>

                        <div className="flex items-center justify-between flex-wrap gap-5">
                            <div className="flex items-center gap-3">
                                {currentProject.tags.map((tag, index) => (
                                    <div key={index} className="tech-logo">
                                        <img src={tag.path} alt={tag.name}/>
                                    </div>
                                ))}
                            </div>

                            <a className="flex items-center gap-2 cursor-pointer text-white-600"
                               href={currentProject.href} target="_blank" rel="noreferrer">
                                <p>Check Live Site</p>
                                <img src="/assets/arrow-up.png" alt="arrow" className="size-3"/>
                            </a>
                        </div>

                        <div className="flex justify-between items-center mt-7">
                            <button className="arrow-btn"
                                    onClick={() => handleNavigation('previous')}>
                                <img src="/assets/left-arrow.png" alt="arrow-left" className="size-4"/>
                            </button>
                            <button className="arrow-btn"
                                    onClick={() => handleNavigation('next')}>
                                <img src="/assets/right-arrow.png" alt="arrow-right" className="size-4"/>
                            </button>
                        </div>
                    </div>

                    <div className="shadow-2xl shadow-black-200
                rounded-lg h-96 md:h-full">
                        <Canvas>
                            <ambientLight intensity={Math.PI}/>
                            <directionalLight position={[10, 10, 5]}/>

                            <Center>
                                <Suspense fallback={<CanvasLoader/>}>
                                    <group scale={2} position={[0, -3, 0]}
                                           rotation={[0, -0.1, 0]}>
                                        <DemoComputer texture={currentProject.texture}/>
                                    </group>
                                </Suspense>
                            </Center>
                            <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false}/>
                        </Canvas>
                    </div>
                </div>
            </AnimatedContent>
        </section>
    )
}
export default Projects
