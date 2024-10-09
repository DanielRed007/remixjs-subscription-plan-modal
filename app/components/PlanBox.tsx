import React from "react";
import { DiscountAlert } from "./DiscountAlert";

interface Props {
  discount: number;
  plan: string;
}

export const PlanBox = ({ discount, plan }: Props) => {
  return (
    <div className='col-span-1 flex flex-col justify-center items-center bg-gray-700 p-4 rounded-sm text-white'>
      <div>
        <DiscountAlert discount={discount} />
        <h1>{plan}</h1>
      </div>
      Column 1 content
    </div>
  );
};
