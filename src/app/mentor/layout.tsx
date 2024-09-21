import SideNav from '@/components/layout/mentor/side-nav';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex">
      <SideNav />
      {children}
    </main>
  );
}
