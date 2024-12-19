import React, { useState } from 'react';

function Menu() {
    const [isMenuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible((prev) => !prev);
    };

    return (
        <div>
            <button onClick={toggleMenu}>
                {isMenuVisible ? 'Hide' : 'Show'}
            </button>

            {isMenuVisible && (
                <div style={{ border: '1px solid black', padding: '10px', marginTop: '10px' }}>
                    <h2>Menu Secret</h2>
                    <ul>
                        <li>rrrr</li>
                        <li>vvvvv</li>
                        <li>ddddd</li>
                    </ul>
                </div>
            )}
        </div>
    );
}

export default Menu;
