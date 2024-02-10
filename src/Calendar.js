import './App.css';
import React, { useState } from 'react';

function Calendar() {
    const months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
    const today = new Date();
    const [currentMonth, setMonth] = useState(today.getMonth());

    const beforeClic = () => {
        setMonth(prevMonth => (prevMonth === 0 ? 11 : prevMonth - 1));
    };

    const afterClic = () => {
        setMonth(prevMonth => (prevMonth === 11 ? 0 : prevMonth + 1));
    };

    return (
        <div className="Calendar">
            <div className="dateNavigator">
                <button onClick={beforeClic}>Bouton arrière</button>
                <h1>{months[currentMonth]}</h1>
                <button onClick={afterClic}>Bouton avant</button>
            </div>
            <p>test</p>
        </div>
    );
}

export default Calendar;
