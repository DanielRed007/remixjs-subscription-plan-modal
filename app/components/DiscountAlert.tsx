import React from "react";

interface Props {
  discount: number;
}

export const DiscountAlert = ({ discount }: Props) => {
  return (
    <div className='flex items-center bg-green-300 text-green-900 font-bold p-2 rounded-sm shadow-md'>
      <span>{`${discount}% OFF`}</span>
    </div>
  );
};
