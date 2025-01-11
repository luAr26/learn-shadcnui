import BoldHeading from "@/components/bold-heading";
import AlertDialogDemo from "@/components/dialog-demo";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Concepts",
};

export default function ConceptsPage() {
  return (
    <div className='mx-auto max-w-[65ch]'>
      <BoldHeading heading='Shadcn Typography' />
      <p className='leading-7 [&:not(:first-child)]:mt-6'>
        The king, seeing how much happier his subjects were, realized the error
        of his ways and repealed the joke tax.
      </p>
      <h2 className='scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0'>
        The People of the Kingdom
      </h2>
      <p className='leading-7 [&:not(:first-child)]:mt-6'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
        voluptatum?
      </p>
      <p className='leading-7 [&:not(:first-child)]:mt-6'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae minima
        veniam illum repudiandae. Placeat asperiores id unde! Magnam officiis
        est quam ex quis, at ipsum. Possimus velit magnam dolor, sed harum
        voluptate! Rem nam, ullam sed dicta fugit suscipit reiciendis.
      </p>
      <h2 className='scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0'>
        The Joke Tax
      </h2>
      <div></div>
      <div className='mt-6'>
        <AlertDialogDemo />
      </div>
    </div>
  );
}
