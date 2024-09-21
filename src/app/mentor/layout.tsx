import SideNav from '@/components/layout/mentor/side-nav';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="p-6 flex">
      <SideNav />
      {children}
    </main>
  );
}
