// App.js (React component)
import React from 'react';

function App() {
    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission
    };

    return (
        <form onSubmit={handleSubmit}>
            <button type="submit">Submit</button>
        </form>
    );
}

export default App;
