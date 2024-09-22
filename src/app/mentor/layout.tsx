import SideNav from '@/components/layout/mentor/side-nav';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex">
      <SideNav />
      <section className="w-5/6 bg-gray-100">{children}</section>
    </main>
  );
}
