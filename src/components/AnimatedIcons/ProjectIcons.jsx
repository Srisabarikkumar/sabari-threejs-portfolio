import {useState, useRef, useEffect} from 'react';
import {Player} from '@lordicon/react';

export default function ProjectIcons({ logo }) {
    // const [isHovered, setIsHovered] = useState(false);
    const playerRef = useRef(null); // Object to store refs for each icon

    useEffect(() => {
        playerRef.current?.playFromBeginning();
    }, [logo]);

    // const handleMouseEnter = () => {
    //     setIsHovered(true);
    //     playerRef.current.playFromBeginning(); // Play the animation when hovered
    // };
    //
    // const handleMouseLeave = () => {
    //     setIsHovered(false);
    //     // playerRef.current.stop(); // Optionally stop the animation when not hovered
    // };

    return (
        // <div className="flex gap-3">
        //     <div>
                <Player
                    ref={playerRef} // Dynamically assign ref
                    icon={logo}
                    size={90}
                    // colorize="#ffffff"
                    // colors={`primary:${link.primary},secondary:${link.secondary}`}
                    onComplete={() => playerRef.current?.playFromBeginning()}
                    // speed={0}
                />
            // </div>
        // </div>
    );
}