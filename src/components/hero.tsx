import { Announcement } from "@/components/announcement";
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";
import Link from "next/link";
import { Button } from "./ui/button";

function Hero() {
  return (
    <div className='max-w-5xl mx-auto'>
      <PageHeader>
        <Announcement />
        <PageHeaderHeading>Build your component library</PageHeaderHeading>
        <PageHeaderDescription>
          Beautifully designed components that you can copy and paste into your
          apps. Made with Tailwind CSS. Open source.
        </PageHeaderDescription>
        <PageActions>
          <Button asChild size='sm'>
            <Link href='/docs'>Get Started</Link>
          </Button>
          <Button asChild size='sm' variant='ghost'>
            <Link href='/blocks'>Browse Blocks</Link>
          </Button>
        </PageActions>
      </PageHeader>
    </div>
  );
}

export default Hero;
