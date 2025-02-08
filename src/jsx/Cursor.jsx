import React, { useEffect, useState } from 'react';
import '../css/Cursor.css';

function Cursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const handleMouseMove = (event) => {
            setPosition({ x: event.pageX, y: event.pageY });
            setVisible(true); // Rendre le curseur visible
        };

        const handleMouseLeave = () => {
            setVisible(false); // Cacher le curseur quand la souris quitte la fenêtre
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseleave', handleMouseLeave);

        // Cleanup listener on component unmount
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return (
        <div
            className="cursor"
            style={{
                top: position.y + 'px',
                left: position.x + 'px',
                position: 'absolute',
                zIndex: 100,
                transform: 'translate(-50%, -50%)',
            }}
        >
        </div>
    );
}

export default Cursor;