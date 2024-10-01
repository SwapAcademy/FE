import Header from '@/components/layout/header';
import SideNav from '@/components/layout/side-nav';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex">
      <SideNav />
      <section className="w-[82%] bg-gray-100">
        <Header />
        {children}
      </section>
    </main>
  );
}
