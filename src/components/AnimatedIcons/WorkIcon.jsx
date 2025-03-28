import {useRef, useState} from "react";
import {Player} from "@lordicon/react";
import code from "../../assets/wired-outline-1326-command-window-line-hover-blinking.json";

const WorkIcon = ({  name, containerClass, isBeam }) => {
    const [isHovered, setIsHovered] = useState(false);
    const playerRef = useRef(null);

    const handleMouseEnter = () => {
        setIsHovered(true);
        playerRef.current?.playFromBeginning();
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        // playerRef.current?.stop();
    };

    return (
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <button className={`btn ${containerClass}`}>
                {isBeam && (
                    <span className="relative flex size-3">
                    <span className="btn-ping"/>
                    <span className="btn-ping_dot"/>
                </span>
                )}
                {name}
                <Player
                    icon={code}
                    ref={playerRef}
                />
            </button>
        </div>
    );
}
export default WorkIcon
