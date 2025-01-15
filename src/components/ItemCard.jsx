import React from 'react'
import { FaPlus,FaMinus  } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { incrementQty,decrementQty,removeFromCart } from '../redux/slices/CartSlice';
import {toast } from "react-hot-toast"


const ItemCard = ({id,name,price,img,qty}) => {
    const dispatch = useDispatch();
  return (
    <>
        <div className='flex gap-2 shadow-md rounded-md p-2 mb-3'>
        <MdDelete onClick={()=>{
                            dispatch(removeFromCart({id,name,price,qty}));
                            toast(`${name} Removed!`, {
                                icon: "👋",
                              });
                              
                        }} className='absolute right-7 text-gray-600 cursor-pointer '/>
       
                        
            <img className='w-[50px] h-[50px]' src={img} alt={name} />
            <div className='leading-5'>
                <h2 className='font-bold text-gray-800'>{name}</h2>
                <div className='flex justify-between items-center w-full gap-2'>
                    <span className='text-green-500 font-bold'>₹ {price}</span>
                    <div className='flex justify-center items-center gap-2 absolute right-7'>
                        <FaMinus onClick={()=>{
                            dispatch(decrementQty({id,name,price,qty}))
                        }} className='border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer'/>
                        <span>{qty}</span>
                        <FaPlus onClick={()=>{
                            dispatch(incrementQty({id,name,price,qty}))
                        }}  className='border-2 border-gray-600 text-gray-600 hover:text-white hover:bg-green-500 hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer'/>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ItemCard