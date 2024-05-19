import React, { useState } from 'react';
import axios from 'axios';

const AssetForm = ({ fetchAssets }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [assetType, setAssetType] = useState('');
    const [purchaseDate, setPurchaseDate] = useState('');
    const [warrantyExpiry, setWarrantyExpiry] = useState('');
    const [assignedTo, setAssignedTo] = useState('');
    const [location, setLocation] = useState('');
    const [status, setStatus] = useState('Active');

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:8000/api/assets/', {
            name, description, asset_type: assetType, purchase_date: purchaseDate,
            warranty_expiry: warrantyExpiry, assigned_to: assignedTo, location, status
        });
        fetchAssets();
        setName('');
        setDescription('');
        setAssetType('');
        setPurchaseDate('');
        setWarrantyExpiry('');
        setAssignedTo('');
        setLocation('');
        setStatus('Active');
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div>
                <label>Description:</label>
                <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} required />
            </div>
            <div>
                <label>Type:</label>
                <input type="text" value={assetType} onChange={(e) => setAssetType(e.target.value)} required />
            </div>
            <div>
                <label>Purchase Date:</label>
                <input type="date" value={purchaseDate} onChange={(e) => setPurchaseDate(e.target.value)} required />
            </div>
            <div>
                <label>Warranty Expiry:</label>
                <input type="date" value={warrantyExpiry} onChange={(e) => setWarrantyExpiry(e.target.value)} required />
            </div>
            <div>
                <label>Assigned To:</label>
                <input type="text" value={assignedTo} onChange={(e) => setAssignedTo(e.target.value)} />
            </div>
            <div>
                <label>Location:</label>
                <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} required />
            </div>
            <div>
                <label>Status:</label>
                <select value={status} onChange={(e) => setStatus(e.target.value)}>
                    <option value="Active">Active</option>
                    <option value="Retired">Retired</option>
                </select>
            </
