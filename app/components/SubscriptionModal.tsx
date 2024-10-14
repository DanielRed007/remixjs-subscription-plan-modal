import React from "react";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";

import { PlanBox } from "./PlanBox";
import { Card } from "~/models/interfaces/cards";
import { useModal } from "../context/ModalContext";
import { XMarkIcon } from "@heroicons/react/16/solid";

interface Props {
  isOpen: boolean;
  cards: Card[];
}

export const SubscriptionModal = ({ cards }: Props) => {
  const { isOpen, closeModal } = useModal();

  return (
    <Dialog
      open={isOpen}
      as='div'
      className='relative z-10 focus:outline-none'
      onClose={closeModal}
    >
      <div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
        <div className='flex min-h-screen items-center justify-center p-4'>
          <DialogPanel
            transition
            className='w-full max-w-5xl rounded-xl bg-gray-900 p-6 duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0'
          >
            <div className='mt-1 flex justify-between'>
              <DialogTitle as='h3' className='text-4xl font-medium text-white'>
                Choose Your Best Subscription Plan
              </DialogTitle>

              <button
                onClick={closeModal}
                className='text-white hover:text-gray-400 focus:outline-none'
              >
                <XMarkIcon className='h-6 w-6' aria-hidden='true' />
              </button>
            </div>

            <div className='mt-8 grid grid-cols-3 gap-2 min-h-[590px]'>
              {cards.map((card, index) => (
                <PlanBox key={index} card={card} />
              ))}
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};
