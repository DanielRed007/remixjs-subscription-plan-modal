import type { MetaFunction } from "@remix-run/node";
import { SubscriptionModal } from "~/components/SubscriptionModal";
import { useModal } from "../context/ModalContext";
import { Card } from "~/models/interfaces/cards";

export const meta: MetaFunction = () => {
  return [
    { title: "Subscriptions Modal" },
    { name: "RemixJS is beautiful", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  const { isOpen, openModal } = useModal();

  const cards: Card[] = [
    {
      discount: 0,
      plan: "Interlink Free",
      discountedPrice: 0,
      finalPrice: 0,
      savedAmount: 0,
      type: "free",
      buttonTitle: "Get Interlink for Free",
      buttonSubtitle: "No credit card required",
    },
    {
      discount: 20,
      plan: "Interlink Plus",
      discountedPrice: 5.01,
      finalPrice: 9.99,
      savedAmount: 60.12,
      type: "plus",
      buttonTitle: "Get Interlink Plus",
      buttonSubtitle: "30-day money-back guarantee",
    },
    {
      discount: 35,
      plan: "Interlink Unlimited",
      discountedPrice: 7.44,
      finalPrice: 14.99,
      savedAmount: 89.28,
      type: "unlimited",
      buttonTitle: "Get Interlink Unlimited",
      buttonSubtitle: "30-day money-back guarantee",
    },
  ];

  return (
    <div className='w-full h-screen flex justify-center items-center bg-gray-800'>
      <button
        onClick={openModal}
        className='px-4 py-2 text-white bg-purple-500 hover:bg-purple-600 rounded-md'
        data-testid='modal-btn'
      >
        View Interlink Plans
      </button>

      <SubscriptionModal isOpen={isOpen} cards={cards} />
    </div>
  );
}
