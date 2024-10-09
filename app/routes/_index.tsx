import { useState } from "react";
import type { MetaFunction } from "@remix-run/node";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline"; // Importing the Heroicon
import { PlanBox } from "~/components/PlanBox";

export const meta: MetaFunction = () => {
  return [
    { title: "Subscriptions Modal" },
    { name: "RemixJS is beautiful", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  let [isOpen, setIsOpen] = useState(false);

  const cards = [
    { discount: 0, plan: "Interlink Free" },
    { discount: 20, plan: "Interlink Plus" },
    { discount: 35, plan: "Interlink Unlimited" },
  ];

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  return (
    <div className='w-full h-screen flex justify-center items-center bg-gray-800'>
      <button
        onClick={open}
        className='px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-md'
      >
        View Subscription Plans
      </button>

      <Dialog
        open={isOpen}
        as='div'
        className='relative z-10 focus:outline-none'
        onClose={close}
      >
        <div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
          <div className='flex min-h-screen items-center justify-center p-4'>
            <DialogPanel
              transition
              className='w-full max-w-5xl rounded-xl bg-gray-900 p-6 duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0'
            >
              <div className='mt-1 flex justify-between'>
                <DialogTitle
                  as='h3'
                  className='text-2xl font-medium text-white'
                >
                  Choose The Best Subscription Plan
                </DialogTitle>

                <button
                  onClick={close}
                  className='text-white hover:text-gray-400 focus:outline-none'
                >
                  <XMarkIcon className='h-6 w-6' aria-hidden='true' />
                </button>
              </div>

              <div className='mt-8 grid grid-cols-3 gap-2 min-h-[580px]'>
                {cards.map((card, index) => (
                  <PlanBox
                    key={index}
                    discount={card.discount}
                    plan={card.plan}
                  />
                ))}
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  );
}
