import BookmarkCards from '@/components/dashboard/bookmarks/bookmark-cards';

export default function Page() {
  return (
    <div className="p-6 space-y-5">
      <h1 className="font-semibold text-xl text-slate-950">Bookmarks</h1>
      <div className="grid grid-cols-3 gap-6">
        <BookmarkCards />
      </div>
    </div>
  );
}
