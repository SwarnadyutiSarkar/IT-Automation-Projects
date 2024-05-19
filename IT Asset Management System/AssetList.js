import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AssetList = () => {
    const [assets, setAssets] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/assets/')
            .then(response => {
                setAssets(response.data);
            })
            .catch(error => {
                console.error('There was an error fetching the assets!', error);
            });
    }, []);

    return (
        <div>
            <h2>Asset List</h2>
            <ul>
                {assets.map(asset => (
                    <li key={asset.id}>
                        {asset.name} - {asset.description} - {asset.status}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AssetList;
