import React from 'react';


function Routine() {

    const handleClick = (activity) => {
        alert(`Vous avez choisi : ${activity}`);
    };

    return (
        <div>
            <h1>Ma Routine</h1>
            <button onClick={() => handleClick("Manger")}>Manger</button>
            <button onClick={() => handleClick("Dormir")}>Dormir</button>
            <button onClick={() => handleClick("Étudier")}>Étudier</button>
        </div>
    );
}

export default Routine;
