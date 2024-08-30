import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
    const [pharmaData, setPharmaData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/pharma');
                setPharmaData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <h1>Pharmaceutical Data</h1>
                <ul>
                    {pharmaData.map(item => (
                        <li key={item.id}>{item.name}</li>  // Assuming your pharma data has an 'id' and 'name' field
                    ))}
                </ul>
            </header>
        </div>
    );
}

export default App;
