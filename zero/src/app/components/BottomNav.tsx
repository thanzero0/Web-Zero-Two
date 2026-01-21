'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function BottomNav() {
  const pathname = usePathname();

  const navItems = [
    {
      href: '/story',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
    },
    {
      href: '/photos',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
    },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-t border-zinc-200 z-50 shadow-lg">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex items-center justify-around py-4">
          {navItems.map((item) => {
            const isActive = pathname === item.href || pathname?.startsWith(item.href + '/');
            return (
              <Link
                key={item.href}
                href={item.href}
                className="group relative flex items-center justify-center w-14 h-14 transition-all duration-300"
              >
                {/* Background circle on hover/active */}
                <div
                  className={`absolute inset-0 rounded-full transition-all duration-300 ${
                    isActive
                      ? 'bg-zinc-100 scale-100'
                      : 'bg-transparent scale-0 group-hover:bg-zinc-100 group-hover:scale-100'
                  }`}
                />
                
                {/* Icon */}
                <div
                  className={`relative z-10 transition-all duration-300 ${
                    isActive
                      ? 'text-zinc-900 scale-110'
                      : 'text-zinc-400 group-hover:text-zinc-900 group-hover:scale-110'
                  }`}
                >
                  {item.icon}
                </div>

                {/* Active indicator dot */}
                {isActive && (
                  <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-zinc-900 rounded-full animate-pulse" />
                )}

                {/* Ripple effect on click */}
                <div className="absolute inset-0 rounded-full opacity-0 group-active:opacity-30 group-active:bg-zinc-900 transition-opacity duration-150" />
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
