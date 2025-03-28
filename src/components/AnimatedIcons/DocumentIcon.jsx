import {useEffect, useRef, useState} from 'react';
import {Player} from '@lordicon/react';

import document from "../../constants/index.js";

const DocumentIcon = () => {
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
            <button className="btn w-full mt-10">
                My Resume
                <Player
                    ref={playerRef}
                    icon={document}
                />
            </button>
        </div>
    )
        ;
}
export default DocumentIcon
