


import React from 'react'

const ProductsCard = ({prod }) => {
  return (
    <div className='w-1/5 h-[350px] border-solid border-2 border-sky-500  rounded-lg m-2 flex flex-col items-center p-1 cursor-pointer space-y-2 hover:border-4'  >
        <img src={prod?.image} className='h-32 object-cover' />
        <div className='font-bold text-center mt-5' >{(prod?.title.substring(0,35))}...</div>
        <div className='text-center opacity-70 text-sm'>{(prod?.description).substring(0 , 40)} ...</div>
        <div className='font-bold text-green-700 text-lg'> FİYAT : {prod?.price} TL</div>
        <button className='font-bold border rounded-md bg-indigo-600 w-full text-white p-1'>SEPETE EKLE</button>
        
    </div>
  )
}

export default ProductsCard