import { json, LoaderFunction } from "@remix-run/node";

type Card = {
  discount: number;
  plan: string;
  discountedPrice: number;
  finalPrice: number;
  savedAmount: number;
  type: string;
  buttonTitle: string;
  buttonSubtitle: string;
};

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

export const loader: LoaderFunction = async () => {
  return await json(cards);
};
