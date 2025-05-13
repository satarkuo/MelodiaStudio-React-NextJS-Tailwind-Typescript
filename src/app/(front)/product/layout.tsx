import Link from 'next/link';

export default function ProductLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container flex gap-12 py-20">
      <ul className="flex flex-col gap-4 w-[300px]">
        <li>
          <Link href="/product/1">樂器演奏</Link>
        </li>
        <li>
          <Link href="/product/2">音樂理論</Link>
        </li>
        <li>
          <Link href="/product/3">音樂創作</Link>
        </li>
      </ul>
      {children}
    </div>
  );
}
