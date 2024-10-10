import { useState } from "react";
import type { MetaFunction } from "@remix-run/node";
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline"; // Importing the Heroicon
import { PlanBox } from "~/components/PlanBox";
import { SubscriptionModal } from "~/components/SubscriptionModal";
import { useModal } from "../context/ModalContext";

export const meta: MetaFunction = () => {
  return [
    { title: "Subscriptions Modal" },
    { name: "RemixJS is beautiful", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const { isOpen, openModal } = useModal();

  const cards = [
    { discount: 0, plan: "Interlink Free" },
    { discount: 20, plan: "Interlink Plus" },
    { discount: 35, plan: "Interlink Unlimited" },
  ];

  return (
    <div className='w-full h-screen flex justify-center items-center bg-gray-800'>
      <button
        onClick={openModal}
        className='px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-md'
      >
        View Subscription Plans
      </button>

      <SubscriptionModal isOpen={isOpen} cards={cards} />
    </div>
  );
}
