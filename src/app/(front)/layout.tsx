import Hero from "@/components/hero";
import { SiteHeader } from "@/components/site-header";

export default function FontLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SiteHeader />
      <Hero />
      {children}
    </>
  );
}
