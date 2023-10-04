 

export const productActions = () => async(dispatch) => {
        const data = fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        dispatch({type:"GET_PRODUCTS" , payload:data})
 }

 