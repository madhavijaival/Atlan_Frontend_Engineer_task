import React from 'react';
import SQLClient from './components/SQLClient';
import TABLES from './data';

const App = () => {
    return (
        <div className="App">
            <div className="header">
                <div className="title">Welcome to SQL Query Test</div>
                <div>
                    <small>Please choose these table  <em className="highlight">{Object.keys(TABLES).join(', ')}</em> tables</small>
                </div>
            </div>
            <SQLClient />
            <div className="footer">
                Atlan Front-End Coding Challenge by Madhavi Jaival
            </div>
        </div>
    );
}

export default App;
