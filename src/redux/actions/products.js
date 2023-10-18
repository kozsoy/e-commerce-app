 

export const productsActions = () => async (dispatch) => {
        const data = await fetch('https://api.escuelajs.co/api/v1/products')
        .then(res=>res.json())
        dispatch({type:"GET_PRODUCTS" , payload:data})
 }

 
 export const productsActionsDetail = (id) => async (dispatch) => {
        const data = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
        .then(res=>res.json())
        dispatch({type:"GET_DETAILS" , payload:data})
 }





















