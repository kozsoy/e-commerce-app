import React from 'react';
import {useParams} from 'react-router-dom';

const Detail = () => {


   const {id} = useParams();

   console.log("sayfa id no : " , id);

 
  return (
    <div>Detail
        Detail

        Detail

        Detail

        </div>
  )
}

export default Detail