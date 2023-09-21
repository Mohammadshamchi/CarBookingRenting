"use client";
// Thanks from Next js for server side rendering 
// But This is client side.
import React from 'react'
import { CustomButtonProps } from '@/types';

const CustomButton = ({title,containerStyles,handleClick,btnType}:CustomButtonProps) => {
  return (
      <button
          disabled={false}
          type={btnType ||"button"}
          className={`custom-btn ${containerStyles}`}
          onClick={handleClick}>
          <span className={'flex-1'}>
              {title}
          </span>


      </button>
  )
}

export default CustomButton;
