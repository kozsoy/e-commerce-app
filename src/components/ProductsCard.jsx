


import React from 'react'

const ProductsCard = ({prod }) => {
  return (
    <div className='w-1/5 h-[250px] border-solid border-2 border-sky-500  rounded-lg m-2'  >
        <img src={prod?.image} className='cursor-pointer' />
        
    </div>
  )
}

export default ProductsCard