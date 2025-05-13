import Link from 'next/link';
import '@/styles/globals.css';
import Image from 'next/image';

export const metadata = {
  title: 'Melodia Studio | 讓音樂成為你的日常',
  description: '從零開始，開啟你的音樂之旅！',
  icons: {
    icon: '/img/favicon.ico',
  },
};
const routes = [
  {
    pathName: '首頁',
    pathUrl: '/',
  },
  {
    pathName: '精選課程',
    pathUrl: '/product',
  },
  {
    pathName: '關於我們',
    pathUrl: '/about',
  },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="relative">
        <header className="bg-white py-4 fixed z-50 left-0 top-0 w-full">
          <div className="container flex justify-between">
            <Link href="/" className="relative w-[140px] h-[22px]">
              <Image
                src="/img/front/logoHeader.svg"
                alt="Logo"
                fill
                className="object-contain"
                priority
              />
            </Link>
            <nav className="flex space-x-3 items-center">
              {routes.map((route) => (
                <Link
                  href={route.pathUrl}
                  className="text-button p-2 hover:text-primary-default"
                  key={route.pathName}
                >
                  {route.pathName}
                </Link>
              ))}
            </nav>
          </div>
        </header>
        <div className="mt-[62px]">{children}</div>
        <footer className="py-8 bg-gray-1">
          <div className="container flex justify-between">
            <Link href="/" className="relative w-[140px] h-[22px]">
              <Image
                src="/img/front/logoHeader.svg"
                alt="Logo"
                fill
                className="object-contain"
                priority
              />
            </Link>
            <ul className="flex flex-col gap-2 text-body3">
              <li>台南市東區XX路XX號</li>
              <li>support@melodia.com</li>
              <li>(06)3310-168</li>
            </ul>
            <ul className="flex flex-col gap-2 text-body3">
              <li className="flex gap-4">
                <Link href="#">FB</Link>
                <Link href="#">IG</Link>
                <Link href="#">YT</Link>
              </li>
              <li>© 2025 Melodia Studio All Rights Reserved.</li>
              <li>本網站僅供展示用</li>
            </ul>
          </div>
        </footer>
      </body>
    </html>
  );
}
