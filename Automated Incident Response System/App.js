import React, { useState, useEffect } from 'react';
import IncidentForm from './components/IncidentForm';
import IncidentList from './components/IncidentList';
import axios from 'axios';

const App = () => {
    const [incidents, setIncidents] = useState([]);

    const fetchIncidents = () => {
        axios.get('http://localhost:8000/api/incidents/')
            .then(response => {
                setIncidents(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the incidents!', error);
            });
    };

    useEffect(() => {
        fetchIncidents();
    }, []);

    return (
        <div>
            <h1>Automated Incident Response System</h1>
            <IncidentForm fetchIncidents={fetchIncidents} />
            <IncidentList incidents={incidents} />
        </div>
    );
};

export default App;
