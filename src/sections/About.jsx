import Globe from "react-globe.gl";
import {useState} from "react";
import {resume} from "../constants/index.js";
import GradientText from "../components/HeroTextDesign.jsx";
import AnimatedContent from "../components/AnimatedContent.jsx";
import DocumentIcon from "../components/AnimatedIcons/DocumentIcon.jsx";

const GradientUtil = ({text}) => {
return <GradientText
    colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
    animationSpeed={8}
    showBorder={false}
    className=""
        >
    {text}
    </GradientText>
}

const About = () => {
    const [hasCopied, setHasCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText("srisabarikkumar@gmail.com");
        setHasCopied(true);

        setTimeout(() => {
            setHasCopied(false);
        }, 2000);
    }
    return (

<AnimatedContent
    distance={150}
    direction="vertical"
    reverse={false}
    config={{ tension: 80, friction: 20 }}
    initialOpacity={0.2}
    animateOpacity
    scale={1.1}
    threshold={0.2}
        >


        <section className="c-space my-20" id="about">
            <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid1.png" alt="grid-1"
                             className="w-full sm:h-[276px] h-fit object-contain"/>

                        <div>
                            <p className="grid-headtext">
                                <GradientUtil text="Hi, I'm Srisabarikkumar"
                                   colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                                />
                            </p>
                            <p className="grid-subtext">
                                I'm a Full Stack Developer with strong foundation in MERN stack, and eager to
                                contribute my skills to the tech community.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/mern-stack.svg" alt="mern"
                             className="w-3/4 sm:h-[276px] mx-auto h-fit object-contain"/>

                        <div>
                            <p className="grid-headtext">
                                <GradientUtil text="Tech Stack" />
                            </p>
                            <p className="grid-subtext">
                                I specialize in MERN stack, and I'm currently learning Next.js.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 xl:row-span-4">
                    <div className="grid-container">
                        <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
                            <Globe
                                height={326}
                                width={326}
                                backgroundColor="rgba(0, 0, 0, 0)"
                                backgroundImageOpacity={0.5}
                                showAtmosphere
                                showGraticules
                                globeImageUrl="/assets/earth-night.jpg"
                                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                                labelsData={[{
                                    lat: 11.016844,
                                    lng: 76.955833,
                                    text: 'Tamilnadu, India',
                                    color: 'white',
                                    size: 15
                                }]}
                            />
                        </div>
                        <div>
                            <p className="grid-headtext">
                                <GradientUtil text="I'm flexible with relocating to different locations." />
                            </p>
                            <p className="grid-subtext">
                                I'm currently based in Coimbatore, Tamil Nadu, India.
                            </p>
                            <a href={resume}
                               download="Sabari_Resume" target="_blank">
                                <DocumentIcon />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="xl:col-span-2 xl:row-span-3">
                    <div className="grid-container">
                        <img src="/assets/grid3.png" alt="grid-3"
                             className="w-full sm:h-[266px] h-fit object-contain"/>

                        <div>
                            <p className="grid-headtext">
                                <GradientUtil text="My Passion for Coding" />
                            </p>
                            <p className="grid-subtext">
                                I love solving problems and building things through code.
                                Programming isn't just my profession—it's my passion.
                                I enjoy exploring new technologies, and enhancing my skills.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="xl:col-span-1 xl:row-span-2">
                    <div className="grid-container">
                        <img src="/assets/grid4.png" alt="grid-4"
                             className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"/>

                        <div className="space-y-2">
                            <p className="grid-subtext text-center">
                                <GradientUtil text="Get in Touch" />
                            </p>
                            <div className="copy-container" onClick={handleCopy}>
                                <img src={hasCopied ? "/assets/tick.svg" : "/assets/copy.svg"} alt="copy"/>
                                <p className="lg:text-2xl md:text-xl font-medium
                                text-gray_gradient text-white">srisabarikkumar@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
</AnimatedContent>
    )
}
export default About
