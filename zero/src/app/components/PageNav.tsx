"use client";

import Link from "next/link";

type PageNavProps = {
  prev?: string;
  next?: string;
};

export default function PageNav({ prev, next }: PageNavProps) {
  return (
    <>
      <div className="hidden md:block">
        {prev && (
          <Link
            href={prev}
            className="fixed left-6 top-[55%] -translate-y-1/2 flex items-center justify-center w-12 h-12 bg-zinc-900 text-white rounded-full shadow-lg hover:scale-110 transition-all z-50"
          >
            &lt;
          </Link>
        )}

        {next && (
          <Link
            href={next}
            className="fixed right-6 top-[55%] -translate-y-1/2 flex items-center justify-center w-12 h-12 bg-zinc-900 text-white rounded-full shadow-lg hover:scale-110 transition-all z-50"
          >
            &gt;
          </Link>
        )}
      </div>

      <div className="md:hidden fixed bottom-20 left-0 right-0 px-4 z-50">
        <div className="bg-zinc-900 text-white rounded-xl shadow-lg p-3 flex justify-between">
          {prev ? (
            <Link
              href={prev}
              className="flex items-center gap-2 px-4 py-2 bg-zinc-800 rounded-lg"
            >
              &lt; Sebelumnya
            </Link>
          ) : (
            <div />
          )}

          {next && (
            <Link
              href={next}
              className="flex items-center gap-2 px-4 py-2 bg-zinc-800 rounded-lg"
            >
              Selanjutnya &gt;
            </Link>
          )}
        </div>
      </div>
    </>
  );
}
