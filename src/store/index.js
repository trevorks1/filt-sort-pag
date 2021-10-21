// Creating actions to start with!
// Sorting variables 
const SORT_BY_ALPHABET = "SORT_BY_ALPHABET"; 
const SORT_BY_PRICE = "SORT_BY_PRICE";
const LOAD_DATA = "LOAD_DATA";
const FILTER_BY_PRICE = "FILTER_BY_PRICE";  

// Then exporting those functions to return an object. Passing everything within action to reducers.
export const sortByPrice = payload => ({
    type: SORT_BY_PRICE, 
    payload
});
export const filterByPrice = payload => ({
    type: FILTER_BY_PRICE, 
    payload
}); 
export const sortByAlphabet = payload => ({
    type: SORT_BY_ALPHABET, 
    payload
}); 
export const loadData = payload => ({
    type: LOAD_DATA, 
    payload
});  

// We create our reducers to return the state of each function above. 

// First calling to the intialState with {} 
const intialState = {}; 
// Then we can declare the filterStore 
const filterStore = (state = intialState, action) => {
    switch (action.type) {
        case SORT_BY_ALPHABET: 
            // sort alphabetically
            return state; 
        case SORT_BY_PRICE: 
            // sort by price
            return state; 
        case FILTER_BY_PRICE: 
            // filter by price
            return state; 
        case LOAD_DATA: 
            let count = action.payload.count; 
            let products = generate(count); 
            return {
                ...state,
                products
            };  
    }
}; 
export default filterStore; 