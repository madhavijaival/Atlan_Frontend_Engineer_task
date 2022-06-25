import React from 'react'
import PropTypes from "prop-types";
/**
 * Renders a JSON list as a HTML table
 */
class JSONTable extends React.Component {
    render() {
        const { jsonList } = this.props;
        // Get the column names from the first entry
        // Filter out any complex data types
        const columns = Object.keys(jsonList[0]).filter(column => typeof jsonList[0][column] !== 'object');
        return (
            <table className="json-to-table">
                <tbody>
                {/* Create header row */}
                <tr>{columns.map(column => <th key={`${column}-header`}>{column}</th>)}</tr>
                {/* Add data rows */}
                {jsonList.map((row, index) => {
                    return (
                        <tr key={`data-row-${index}`}>
                            {/* Add data columns */}
                            {columns.map(column => <td key={`row-${index}-${column}-data`}>{row[column]}</td>)}
                        </tr>
                    )
                })}
                </tbody>
            </table>
        );
    }
}

JSONTable.propTypes = {
    jsonList: PropTypes.array.isRequired
};

export default JSONTable;