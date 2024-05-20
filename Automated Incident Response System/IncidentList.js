import React, { useState, useEffect } from 'react';
import axios from 'axios';

const IncidentList = () => {
    const [incidents, setIncidents] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/incidents/')
            .then(response => {
                setIncidents(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the incidents!', error);
            });
    }, []);

    return (
        <div>
            <h2>Incident List</h2>
            <ul>
                {incidents.map(incident => (
                    <li key={incident.id}>
                        {incident.title} - {incident.description} - {incident.severity} - {incident.status}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default IncidentList;
