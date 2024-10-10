import React from "react";
import { DiscountAlert } from "./DiscountAlert";
import { Card } from "~/models/interfaces/cards";

interface Props {
  card: Card;
}

export const PlanBox = ({ card }: Props) => {
  return (
    <div className='col-span-1 relative flex flex-col justify-center items-center bg-gray-700 p-4 rounded-sm text-white'>
      <div className='absolute top-0 left-0 w-full p-2 bg-gray-800 rounded-t-sm'>
        <DiscountAlert discount={card.discount} />
        <h1 className='text-lg font-bold'>{card.plan}</h1>
      </div>
      <div className='mt-12'>Column 1 content</div>
    </div>
  );
};
