/**
 * Parser for extracting only the specified columns in the Graphql query
 * Performance booster because it ensures that only the needed data is extracted from the SQL database
 * @param {any} GraphqlInfo -> @info parameter passed through the Graphql resolver function
 * @returns {Array<String>} -> which holds only the columns specified in the frontend Graphql query
 */
function extractQueryColumns(GraphqlInfo) {
    var queryColumns = [];
    GraphqlInfo.fieldNodes[0].selectionSet.selections.forEach(item => {
        if (item.selectionSet == null && item.name.value !== "__typename")
            queryColumns.push(item.name.value);
    });
    return queryColumns;
}

export default extractQueryColumns;