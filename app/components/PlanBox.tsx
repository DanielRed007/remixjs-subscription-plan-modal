import React from "react";
import { Button } from "@headlessui/react";
import { DiscountAlert } from "./DiscountAlert";
import { Card } from "~/models/interfaces/cards";

interface Props {
  card: Card;
}

export const PlanBox = ({ card }: Props) => {
  return (
    <div className='col-span-1 relative flex flex-col justify-center items-center bg-gray-700 p-4 rounded-sm text-white'>
      <div className='absolute top-0 left-0 w-full h-60 pl-5 pt-1 bg-gray-800 rounded-t-sm'>
        <DiscountAlert discount={card.discount} />
        <h1 className='text-4xl font-light mt-4'>{card.plan}</h1>
        <h3 className='text-2xl font-light mt-1'>$12.99</h3>
        <h3 className='text-5xl font-bold mt-1'>$9.99</h3>
        <h3 className='text-lg font-light mt-1'>save $25</h3>
      </div>
      <div className='absolute bottom-0 w-full h-fit flex flex-col justify-center items-center font-light'>
        <div></div>
        <Button className='rounded-md w-4/5 bg-purple-700 mt-0 py-1.5 px-3 text-sm/6 font-semibold text-white focus:outline-none data-[hover]:bg-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white'>
          Get Free Plan
        </Button>
        <h3 className='text-sm font-light mt-1 mb-3'>
          30-day money-back guarantee
        </h3>
      </div>
    </div>
  );
};
