/**
 * Capitalizes the first character
 * @param str
 * @returns {*|string}
 */
export const capitalize = (str) => str && str[0].toUpperCase() + str.slice(1).toLowerCase();

/**
 * Returns the table name from a SQL query
 * @param query
 * @returns {string}
 */
export const getTableNameFromSQLQuery = (query) => {
    const queryWords = query.toLowerCase().split(' ');
    const indexForTableName = queryWords.findIndex(word => word === 'from') + 1;
    const tableName = queryWords[indexForTableName]


        .replace(';', '');
    return tableName;

}
/* export const getTableIdFromSQLQuery = (query) => {
    const queryWords = query.toLowerCase().split(' ');
    const indexForTableId = queryWords.findIndex(word => word === '*') + 1;

    const tableId = queryWords[indexForTableId]

        .replace(';', '');
    return tableId;

} */