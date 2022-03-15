export default (files = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;

        case 'CREATE':  
            return [...files, action.payload];

        case 'UPLOAD':     
            return files;
   
        default:
            return files;
    }

}