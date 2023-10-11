 

export const productsActions = () => async (dispatch) => {
        const data = await fetch('https://api.escuelajs.co/api/v1/products')
        .then(res=>res.json())
        dispatch({type:"GET_PRODUCTS" , payload:data})
 }

 

 /*'https://fakestoreapi.com/products' */