import React, { useState } from 'react';
import axios from 'axios';

const IncidentForm = ({ fetchIncidents }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [severity, setSeverity] = useState('Low');
    const [status, setStatus] = useState('Open');

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:8000/api/incidents/', {
            title, description, severity, status
        });
        fetchIncidents();
        setTitle('');
        setDescription('');
        setSeverity('Low');
        setStatus('Open');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title:</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
            </div>
            <div>
                <label>Description:</label>
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
            </div>
            <div>
                <label>Severity:</label>
                <select value={severity} onChange={(e) => setSeverity(e.target.value)}>
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                </select>
            </div>
            <div>
                <label>Status:</label>
                <select value={status} onChange={(e) => setStatus(e.target.value)}>
                    <option value="Open">Open</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Closed">Closed</option>
                </select>
            </div>
            <button type="submit">Add Incident</button>
        </form>
    );
};

export default IncidentForm;
