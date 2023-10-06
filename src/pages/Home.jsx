import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productsActions } from "../redux/actions/products";
import ProductsCard from "../components/ProductsCard";

const Home = () => {
  const dispatch = useDispatch();
  
  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    
    dispatch(productsActions());
  
  }, [dispatch]);
  
  console.log("Fiyat : " , products );

  return ( 
  
  <div className="flex flex-wrap justify-center">

    {
      products && products.map((prod , i ) => (
        <ProductsCard key={i} prod={prod} />
      ))

      
    }


 </div>)


};

export default Home;
