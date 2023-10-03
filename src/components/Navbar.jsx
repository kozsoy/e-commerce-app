import React from "react";
import { useState , useEffect } from "react";
import { BsLightbulb, BsBasket , BsMoonStarsFill } from "react-icons/bs";

const Navbar = () => {
  const [color , setColor] = useState(false)
  
  
  useEffect(()=>{
  const root = document.getElementById('root')
  
    if(color){
      root.style.backgroundColor = "black";
      root.style.color="gray";
  }else{
    root.style.backgroundColor="white";
    root.style.color="black"
  }
  
  },[color])
  
  
  
  return (
    <div className="flex items-center justify-between px-3 h-20">
      <div>LOGO</div>
      <div>
        <input className="border p-1 outline-none rounded-md" type="text" placeholder="Search" />
      </div>
      <div onClick={()=>setColor(!color)}>

        {
          color ? < BsMoonStarsFill size={25} className="cursor-pointer" /> : < BsLightbulb size={25} className="cursor-pointer" />
        }
           
        
        
      </div>
      <div className="relative">
        <BsBasket size={25} className="cursor-pointer" />
        <span className=" absolute -top-2 -right-3 px-2 text-white bg-red-600 rounded-full text-sm">
          3
        </span>
      </div>
    </div>
  );
};

export default Navbar;
