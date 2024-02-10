import React, { useState } from 'react';
import './App.css';

function Calendar() {
    const months = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
    const daysOfWeek = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
    const today = new Date();
    const [currentMonth, setMonth] = useState(today.getMonth());
    const [currentYear, setYear] = useState(today.getFullYear());

    const beforeClic = () => {
        setMonth(prevMonth => prevMonth === 0 ? 11 : prevMonth - 1);
        if (currentMonth === 0) {
            setYear(currentYear - 1);
        }
    };

    const afterClic = () => {
        setMonth(prevMonth => prevMonth === 11 ? 0 : prevMonth + 1);
        if (currentMonth === 11) {
            setYear(currentYear + 1);
        }
    };

    const getDaysInMonth = (month, year) => {
        return new Date(year, month + 1, 0).getDate();
    };

    const getFirstDayOfMonth = (month, year) => {
        return new Date(year, month, 1).getDay();
    };

    const daysInMonth = getDaysInMonth(currentMonth, currentYear);
    const firstDayOfMonth = getFirstDayOfMonth(currentMonth, currentYear);

    const days = [];
    for (let i = 0; i < firstDayOfMonth; i++) {
        days.push(<div class="day empty"></div>);
    }
    for (let i = 1; i <= daysInMonth; i++) {
        days.push(<div class="day">{i}</div>);
    }

    return (
        <div className="Calendar">
            <div className="monthNavigator">
                <button onClick={beforeClic}>Bouton arrière</button>
                <h1>{months[currentMonth]} {currentYear}</h1>
                <button onClick={afterClic}>Bouton avant</button>
            </div>
            <div className="dayNavigator">
                {daysOfWeek.map(day => (
                    <div class="dayOfWeek">{day}</div>
                ))}
                {days}
            </div>
        </div>
    );
}

export default Calendar;
