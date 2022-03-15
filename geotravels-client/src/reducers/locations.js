export default (locations = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;

        case 'CREATE':  
            return [...locations, action.payload];

        case 'UPLOAD':     
            return locations;
   
        default:
            return locations;
    }

}