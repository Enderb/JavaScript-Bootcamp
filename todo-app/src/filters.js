// Set up filters default object
const filters = {
    searchQuery: '',
    hideCompleted: false
}

// getFilters
// Arguments: none
// Return value: filters object
const getFilters = () => filters

// setFilters
// Arguments: updates object with optional searchText or hideCompleted
// Return value: none
const setFilters = (updates) => {
    if(typeof updates.searchQuery === 'string'){
        filters.searchQuery = updates.searchQuery
    }

    if(typeof updates.hideCompleted === 'boolean'){
        filters.hideCompleted = updates.hideCompleted
    }
}

// Make sure to set up the exports
export { getFilters, setFilters }