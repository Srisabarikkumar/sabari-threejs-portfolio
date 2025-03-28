// import Squares from "./components/Squares.jsx";
import Navbar from "./sections/Navbar.jsx";
import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";
import Projects from "./sections/Projects.jsx";
import Experience from "./sections/Experience.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from "./sections/Footer.jsx";
// import Aurora from "./components/Squares.jsx";
import Particles from "./components/Squares.jsx";
import Squares from "./components/Squares.jsx";
import Hyperspeed from "./components/Squares.jsx";
import Lightning from "./components/Squares.jsx";
import Aurora from "./components/Squares.jsx";
// import {Route, Routes} from "react-router-dom";


const App = () => {
    return (
        <>
            <div className="relative w-full min-h-screen">
                <div className="fixed top-0 left-0 right-0 z-0 w-full h-screen opacity-0.5 bg-bottom bg-no-repeat">


                    {/*<div style={{ width: '100%', height: '600px', position: 'relative' }}>*/}
                    {/*    <Lightning*/}
                    {/*        hue={220}*/}
                    {/*        xOffset={0}*/}
                    {/*        speed={1}*/}
                    {/*        intensity={1}*/}
                    {/*        size={1}*/}
                    {/*    />*/}
                    {/*</div>*/}

                    {/*import Hyperspeed from './Hyperspeed';*/}

                    {/*// the component will fill the height/width of its parent container, edit the CSS to change this*/}
                    {/*// the options below are the default values*/}

                    {/*<Hyperspeed*/}
                    {/*    effectOptions={{*/}
                    {/*        onSpeedUp: () => { },*/}
                    {/*        onSlowDown: () => { },*/}
                    {/*        distortion: 'turbulentDistortion',*/}
                    {/*        length: 400,*/}
                    {/*        roadWidth: 10,*/}
                    {/*        islandWidth: 2,*/}
                    {/*        lanesPerRoad: 4,*/}
                    {/*        fov: 90,*/}
                    {/*        fovSpeedUp: 150,*/}
                    {/*        speedUp: 2,*/}
                    {/*        carLightsFade: 0.4,*/}
                    {/*        totalSideLightSticks: 20,*/}
                    {/*        lightPairsPerRoadWay: 40,*/}
                    {/*        shoulderLinesWidthPercentage: 0.05,*/}
                    {/*        brokenLinesWidthPercentage: 0.1,*/}
                    {/*        brokenLinesLengthPercentage: 0.5,*/}
                    {/*        lightStickWidth: [0.12, 0.5],*/}
                    {/*        lightStickHeight: [1.3, 1.7],*/}
                    {/*        movingAwaySpeed: [60, 80],*/}
                    {/*        movingCloserSpeed: [-120, -160],*/}
                    {/*        carLightsLength: [400 * 0.03, 400 * 0.2],*/}
                    {/*        carLightsRadius: [0.05, 0.14],*/}
                    {/*        carWidthPercentage: [0.3, 0.5],*/}
                    {/*        carShiftX: [-0.8, 0.8],*/}
                    {/*        carFloorSeparation: [0, 5],*/}
                    {/*        colors: {*/}
                    {/*            roadColor: 0x080808,*/}
                    {/*            islandColor: 0x0a0a0a,*/}
                    {/*            background: 0x000000,*/}
                    {/*            shoulderLines: 0xFFFFFF,*/}
                    {/*            brokenLines: 0xFFFFFF,*/}
                    {/*            leftCars: [0xD856BF, 0x6750A2, 0xC247AC],*/}
                    {/*            rightCars: [0x03B3C3, 0x0E5EA5, 0x324555],*/}
                    {/*            sticks: 0x03B3C3,*/}
                    {/*        }*/}
                    {/*    }}*/}
                    {/*/>*/}

                    {/*<Squares*/}
                    {/*    speed={0.1}*/}
                    {/*    squareSize={40}*/}
                    {/*    direction='diagonal' // up, down, left, right, diagonal*/}
                    {/*    borderColor='#575757'*/}
                    {/*    hoverFillColor='#222'*/}
                    {/*/>*/}

                    {/*<div style={{ width: '100%', height: '600px', position: 'relative' }}>*/}
                    {/*    <Particles*/}
                    {/*        particleColors={['#ffffff', '#ffffff']}*/}
                    {/*        particleCount={200}*/}
                    {/*        particleSpread={10}*/}
                    {/*        speed={0.1}*/}
                    {/*        particleBaseSize={100}*/}
                    {/*        moveParticlesOnHover={true}*/}
                    {/*        alphaParticles={false}*/}
                    {/*        disableRotation={false}*/}
                    {/*    />*/}
                    {/*</div>*/}
                    <Aurora
                        colorStops={["#00d8ff", "#7cff67", "#00d8ff"]}
                        blend={0.5}
                        amplitude={0.5}
                        speed={1.0}
                    />
                </div>
            <main className="max-w-7xl mx-auto z-1 relative">
                {/*<Routes>*/}
                {/*    <Route path="/" element={<About />} />*/}
                {/*</Routes>*/}
                <Navbar />
                <Hero />
                <About />
                <Projects />
                <Experience />
                <Contact />
                <Footer />
            </main>
            </div>
        </>
    )
}
export default App
