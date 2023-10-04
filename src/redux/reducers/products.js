


const productsReducer = (state={products:[]},action) => {
    switch (action.tye) {
        case "GET_PRODUCTS":
            
            return{
                products: action.payload
            }
    
        default:
            return state;
    }
}