import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { productsActionsDetail } from "../redux/actions/products";

const Detail = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const { product } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(productsActionsDetail(id));
  }, [dispatch]);

  console.log("ürün : ", product);

  return (
    <div className="w-full flex justify-center items-center space-x-10 mt-10">
     
      <img className="w-1/3 rounded-2xl" src={product?.images} alt="" />
     
      <div className="w-2/3 space-y-5">
     
        <div className="font-bold text-xl flex items-center justify-center">{product?.title}</div>
     
        <div className="text-xs opacity-70">{product?.description}</div>
        <div className="font-bold flex items-center justify-center ">Fiyat : {product?.price} TL</div>
        <div>
          <button className='font-bold w-full border rounded-md p-3 hover:bg-green-500   bg-indigo-600 text-white'>SEPETE EKLE</button>
        </div>

      </div>
    
    </div>
  );
};

export default Detail;
