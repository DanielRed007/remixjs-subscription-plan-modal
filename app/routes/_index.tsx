import {
  json,
  LoaderFunctionArgs,
  type LoaderFunction,
  type MetaFunction,
} from "@remix-run/node";
import { SubscriptionModal } from "~/components/SubscriptionModal";
import { useModal } from "../context/ModalContext";
import { Card } from "~/models/interfaces/cards";
import { useLoaderData } from "@remix-run/react";
import { loader as cardsLoader } from "./api/cards";

export const meta: MetaFunction = () => {
  return [
    { title: "Subscriptions Modal" },
    { name: "RemixJS is beautiful", content: "Welcome to Remix!" },
  ];
};

export const loader: LoaderFunction = async ({
  request,
  params,
  context,
}: LoaderFunctionArgs) => {
  const cardsResponse = await cardsLoader({ request, params, context });

  if (!cardsResponse || !(cardsResponse instanceof Response)) {
    throw new Error("Failed to load cards");
  }

  return json(await cardsResponse.json());
};

export default function Index() {
  const { isOpen, openModal } = useModal();

  const cards: Card[] = useLoaderData<Array<Card>>();

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
