
import React from 'react';
import {AiOutlineClose} from 'react-icons/ai';
import { useDispatch } from 'react-redux';






const Card = () => {
 const dispatch = useDispatch();
  const getClosed = () => {
   dispatch({type:'DRAWER' , payload : false})
  }
  return (
    <div  className='w-1/3 h-full border fixed top-0 right-0 z-50 bg-white ' >

        <div className='flex justify-between p-3'>
          <h1 className='text-2xl'>SEPETİM</h1>
          <AiOutlineClose onClick={getClosed} size={25} className='cursor-pointer hover:bg-red-600' />
        </div>



    </div>
  )
}

export default Card