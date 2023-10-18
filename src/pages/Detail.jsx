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
    <div className="w-full flex justify-center space-x-10 mt-10">
     
      <img className="w-1/3" src={product?.images} alt="" />
     
      <div className="w-2/3 space-y-5">
     
        <div className="font-bold text-xl">{product?.title}</div>
     
        <div className="text-xs opacity-70">{product?.description}</div>
        <div>Fiyat : {product.price} TL</div>


      </div>
    
    </div>
  );
};

export default Detail;
