import React from "react";

interface Props {
  discount: number;
}

export const DiscountAlert = ({ discount }: Props) => {
  return (
    <div className='flex items-center bg-green-300 text-green-900 font-bold p-1 rounded-sm shadow-md w-20 mt-4'>
      <span className='text-sm'>{`${discount}% OFF`}</span>
    </div>
  );
};
