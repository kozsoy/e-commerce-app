
import React from 'react';
import {AiOutlineClose} from 'react-icons/ai';
import { useDispatch } from 'react-redux';






const Card = () => {
 const dispatch = useDispatch();
  const getClosed = () => {
   dispatch({type:'DRAWER' , payload : false})
  }
  return (
    <div  className='w-1/3 h-full border fixed top-0 right-0 z-50 bg-white' >

        <div className='flex justify-between p-3'>
          <h1 className='text-2xl'>SEPETİM</h1>
          <AiOutlineClose onClick={getClosed} size={25} className='cursor-pointer hover:bg-red-600' />
        </div>
        <div className='h-34 space-x-2 flex items-center justify-between border-b-2 border-gray-400 ' >
          <img className='h-32 ' src="https://cdn.dsmcdn.com/ty278/product/media/images/20211221/11/14330638/86748136/1/1_org_zoom.jpg" alt="" />
          <div className='w-44 '>
              <div className='font-bold text-sm'>
              Practical Title Concrete 
            </div>
            <div className='text-xs  opacity-60'>
            Bacon Practical Concrete Bacon Practical Concrete Bacon
              </div>
            </div>
            <div className='font-bold text-sm'>
              Fiyat : 199 TL 
            </div>
            <div className='w-10 bg-red-500 text-white flex justify-center items-center font-bold rounded-md cursor-pointer hover:bg-red-950  '>Sil</div>
        </div>



    </div>
  )
}

export default Card