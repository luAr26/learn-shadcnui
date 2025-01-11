import Navbar from "@/components/navbar";

export default function FontLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='p-8'>
      <Navbar />
      {children}
    </div>
  );
}
