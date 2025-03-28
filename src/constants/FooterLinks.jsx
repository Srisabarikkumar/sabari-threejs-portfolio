import { useState, useRef } from 'react';
import { Player } from '@lordicon/react';

import { footerSocialLinks } from './index.js';

export default function FooterLinks() {
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
        <div className="flex gap-3">
            {footerSocialLinks.map((link) => (
                <a key={link.id} href={link.href} target="_blank"  onMouseEnter={() => handleMouseEnter(link.id)}
                   onMouseLeave={() => handleMouseLeave(link.id)}>
                    <div className="social-icon">
                        <Player
                            ref={(el) => (playerRefs.current[link.id] = el)} // Dynamically assign ref
                            icon={link.icon}
                            size={link.size}
                            // colorize="#ffffff"
                            colors={`primary:${link.primary},secondary:${link.secondary}`}
                            // onBeginning={() => playerRefs.current[link.id]?.playFromBeginning()}
                            speed={2}
                        />
                    </div>
                </a>
            ))}
        </div>
    );
}