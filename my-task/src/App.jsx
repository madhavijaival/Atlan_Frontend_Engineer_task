import React from 'react';
import SQLClient from './components/SQLClient';
import TABLES from './data';

const App = () => {
    return (
        <div className="App">
            <div className="header">
                <img
                    src="https://www.gartner.com/pi/vendorimages/atlan_metadata-management-solutions_1591797355605.png"
                    alt="new"
                    style={{
                        width: "170px",
                        height: "100px",
                        float: "left",
                        marginLeft: "2.1em"

                    }}
                />
                <div className="title">Welcome to SQL Query Test</div>
                <div>
                    <small>Please choose these table  <em className="highlight">{Object.keys(TABLES).join(', ')} </em>tables </small>
                </div>
            </div>
            <SQLClient />
            <div className="footer">
                <div>© 2022 Madhavi Jaival</div>
            </div>
        </div>
    );
}

export default App;
