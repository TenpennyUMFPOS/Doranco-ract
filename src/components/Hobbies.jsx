import React, { useState } from 'react';

function Hobbies() {
    const [hobbies, setHobbies] = useState([]);
    const [newHobby, setNewHobby] = useState('');

    const handleAddHobby = () => {
        if (newHobby.trim() !== '') {
            setHobbies((prevHobbies) => [...prevHobbies, newHobby]);
            setNewHobby('');
        } else {
            alert('Le champ ne peut pas être vide.');
        }
    };

    return (
        <div>
            <h2>Liste des Hobbies</h2>
            <ul>
                {hobbies.map((hobby, index) => (
                    <li key={index}>{hobby}</li>
                ))}
            </ul>
            <input
                type="text"
                value={newHobby}
                onChange={(e) => setNewHobby(e.target.value)}
                placeholder="Ajouter un hobby"
            />
            <button onClick={handleAddHobby}>Ajouter</button>
        </div>
    );
}

export default Hobbies;
