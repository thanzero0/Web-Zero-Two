import Link from 'next/link';
import Image from 'next/image';

export default function Photos() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <Link href="/" className="inline-block mb-8 text-zinc-600 hover:text-zinc-900 transition-colors">
          ← Kembali
        </Link>
        <h1 className="text-4xl md:text-5xl font-light mb-12 text-zinc-900">Photos</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Image 
            src="https://i.pinimg.com/736x/8c/16/a7/8c16a7c5868bea305ef63694cc558636.jpg" 
            alt="Zero Two" 
            width={400} 
            height={400} 
            className="rounded-lg shadow-lg w-full h-auto"
            unoptimized
          />
          <Image 
            src="https://i.pinimg.com/736x/41/a4/3b/41a43ba1f51316414a6255277c224b6e.jpg" 
            alt="Zero Two" 
            width={400} 
            height={400} 
            className="rounded-lg shadow-lg w-full h-auto"
            unoptimized
          />
        </div>
      </div>
    </div>
  );
}
