import React, { useState } from 'react';
import './App.css';
import EventForm from './EventForm';
import EventList from './EventList';

function App() {
    const [events, setEvents] = useState([]);
    const [selectedDate, setSelectedDate] = useState('');

    const addEvent = (newEvent) => {
        setEvents([...events, newEvent]);
    };

    const handleDateChange = (e) => {
        setSelectedDate(e.target.value);
    };

    return (
        <div className="App">
            <h1>My First React App</h1>
            <input
                type="date"
                value={selectedDate}
                onChange={handleDateChange}
                required
            />
            <EventForm onAddEvent={addEvent} selectedDate={selectedDate} />
            <EventList events={events} selectedDate={selectedDate} />
        </div>
    );
}

export default App;
