import type { MetaFunction } from "@remix-run/node";
import { Button } from "@headlessui/react";

export const meta: MetaFunction = () => {
  return [
    { title: "Subscriptions Modal" },
    { name: "RemixJS is beautiful", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className='w-full h-screen flex justify-center items-center bg-gray-800'>
      <Button
        as='button'
        className='px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-md'
      >
        View Subscription Plans
      </Button>
    </div>
  );
}
