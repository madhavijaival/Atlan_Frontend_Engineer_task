import React from 'react';
import SQLClient from './components/SQLClient';
import TABLES from './data';

const App = () => {
    return (
        <div className="App">
            <div className="header">
                <div className="title">SQL Client</div>
                <div>
                    <small>Currently supports only <em className="highlight">select *</em> queries from <em className="highlight">{Object.keys(TABLES).join(', ')}</em> tables</small>
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
