import React from 'react'
import Dashboard from './Dashboard';
import JSONTable from './JSONTable';
import classNames from 'classnames';
import TABLES from '../data';
import { getTableNameFromSQLQuery as getTableName, capitalize } from '../utils';

const DEFAULT_OUTPUT = 'Type SQL query to see output...';
const DEFAULT_QUERY_INDEX = 0;
const DEFAULT_QUERY = {
    query: null,
    result: null,
    label: 'Search List'
};

/**
 * Renders a SQLClient dashboard where SQL queries can be run
 */

class SQLClient extends React.Component {
    constructor(props) {
        super(props)

        this.history = [DEFAULT_QUERY];

        // State
        this.state = {
            opCount: 0,
            activeQuery: DEFAULT_QUERY_INDEX,
        };

        // Refs
        this.queryInput = React.createRef()
        this.queryOutput = React.createRef()
    }

    /**
     * Runs the SQL entered by the user
     * Adds to the query history on the sidebar
     */
    runQuery = () => {
        // Step 1: Check if query is present. If no query, don't do anything
        const query = this.queryInput?.current.value;
        if (!query) {
            return;
        }
        // Step 2: Get table name
        const tableName = getTableName(query);
        // Step 2b: If table name is invalid, show error
        const isValidTableName = Object.keys(TABLES).includes(tableName);
        if (!isValidTableName) {
            this.updateOutput('Please add correct table name...');
            return;
        }
        // Step 3: Get result for query
        // For now we're simply reading json data in memory
        const result = TABLES[tableName];
        // Step 4: Push History
        this.pushHistory(query, result, tableName);
    }

    /**
     * Clears query and output
     */
    clear = () => {
        this.setQuery('');
    }

    /**
     * Sets the query to the value provided
     * @param text
     */
    setQuery = (text) => {
        this.queryInput.current.value = text;
    }

    /**
     * When user clicks on a previously run query (from the sidebar)
     * @param {number} index
     */
    onClickExistingQuery = (index) => {
        this.setState({ activeQuery: index });
        // If user clicks on `New Query` (always the first element), then clear state
        if (index === DEFAULT_QUERY_INDEX) {
            this.clear();
        } else {
            this.setQuery(this.history[index]?.query || DEFAULT_QUERY)
        }
    }

    /**
     * Adds a query to the history (maintained in component state)
     * @param {string} query
     * @param {json} result
     * @param {string} tableName
     */
    pushHistory = (query, result, tableName) => {
        const { activeQuery } = this.state;
        // Step 1: Form the query label
        const label = `${capitalize(tableName)} select`;
        // Step 2: Form thr query object
        const queryObject = { query, result, label };
        // Step 3: Determine the queryIndex for the query being added/modified
        let queryIndex;
        // Step 4: If this is a new query
        if (activeQuery === DEFAULT_QUERY_INDEX) {
            // Step 4b: Insert at position 1
            this.history.splice(1, 0, queryObject);
            queryIndex = 1;
        } else {
            // Step 5: For an existing query, simply update it
            this.history[activeQuery] = queryObject;
            queryIndex = activeQuery;
        }
        // Step 6: Update state
        this.setState({ opCount: this.state.opCount + 1, activeQuery: queryIndex });
    }

    /**
     * Updates the output section
     * @param {string} text
     */
    updateOutput = (text) => {
        this.queryOutput.current.innerHTML = text;
    }

    /**
     * Renders the sidebar
     * @returns {JSX.Element}
     */
    renderSidebarContent = () => {
        const { activeQuery } = this.state;
        return (
            <ul className="list">
                {this.history.map((element, index) => (
                    <li
                        key={`list-item-${index}`}
                        className={classNames({ active: activeQuery === index })}
                        onClick={() => { this.onClickExistingQuery(index) }}
                    >{element.label}</li>
                ))}
            </ul>
        );
    }

    render() {
        const { activeQuery } = this.state;
        const queryObject = this.history[activeQuery];
        const sidebarContent = this.renderSidebarContent();
        const topContent = (
            <div className="query-with-controls">
                <div className="controls">
                    <div onClick={this.runQuery} className="button">Run ►</div>
                    <div onClick={this.clear} className="clear ">Clear &#10006;</div>
                </div>
                <textarea
                    ref={this.queryInput}
                    className="code-style"
                    placeholder="Enter SQL query..."
                    defaultValue={queryObject?.query}
                />
            </div>
        );
        const bottomContent = (
            <div className="code-style" ref={this.queryOutput}>
                {queryObject?.result ? <JSONTable jsonList={queryObject.result} /> : DEFAULT_OUTPUT}
            </div>
        );
        return (
            <div className="sql-client">
                <Dashboard
                    sidebarContent={sidebarContent}
                    topLabel="Query"
                    topContent={topContent}
                    bottomLabel="Output"
                    bottomContent={bottomContent}
                />
            </div>
        );
    }
}

export default SQLClient;