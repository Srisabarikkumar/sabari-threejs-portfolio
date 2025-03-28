import { useState, useRef } from "react";
import { Player } from "@lordicon/react";
import {navLinks} from "../../constants/index.js";

const HomeIcon = () => {
    const [isHovered, setIsHovered] = useState(false);
    const playerRefs = useRef({}); // Object to store refs for each icon

    const handleMouseEnter = (id) => {
        setIsHovered(true);
        playerRefs.current[id]?.playFromBeginning(); // Play the animation when hovered
    };

    const handleMouseLeave = (id) => {
        setIsHovered(false);
        // playerRefs.current[id]?.stop(); // Optionally stop the animation when not hovered
    };

    return (
        <ul className="nav-ul">
            {navLinks.map(({id, href, name, icon}) => (
                <li key={id} className="nav-li">
                    <a href={href} className="nav-li_a flex items-center gap-1.5"
                       onMouseEnter={() => handleMouseEnter(id)}
                       onMouseLeave={() => handleMouseLeave(id)}
                       onClick={() => {
                       }}>
                          <Player
                              ref={(el) => (playerRefs.current[id] = el)}
                              icon={icon}
                              size={25}
                              // onComplete={() => playerRefs.current[id]?.playFromBeginning()}
                          />
                        {name}
                    </a>
                </li>
            ))}
        </ul>
)
    ;
}
export default HomeIcon
