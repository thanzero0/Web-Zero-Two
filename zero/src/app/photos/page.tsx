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
          <Image 
            src="https://i.pinimg.com/736x/d8/7b/fe/d87bfe94b75bc66c6d90229e56f68de1.jpg" 
            alt="Zero Two" 
            width={400} 
            height={400} 
            className="rounded-lg shadow-lg w-full h-auto"
            unoptimized
          />
          <Image 
            src="https://i.pinimg.com/736x/7e/72/28/7e72287f31f69b7ad0c25378b0d7f549.jpg" 
            alt="Zero Two" 
            width={400} 
            height={400} 
            className="rounded-lg shadow-lg w-full h-auto"
            unoptimized
          />
          <Image 
            src="https://i.pinimg.com/736x/cd/0c/b9/cd0cb955c6ee15776c6f51ccf3e5426e.jpg" 
            alt="Zero Two" 
            width={400} 
            height={400} 
            className="rounded-lg shadow-lg w-full h-auto"
            unoptimized
          />
          <Image 
            src="https://i.pinimg.com/736x/a2/43/5c/a2435c8a9fceca3d6679a05d5928faef.jpg" 
            alt="Zero Two" 
            width={400} 
            height={400} 
            className="rounded-lg shadow-lg w-full h-auto"
            unoptimized
          />
          <Image 
            src="https://i.pinimg.com/1200x/d9/0f/44/d90f44bdd5f878d69fd6ad3021c0b11f.jpg" 
            alt="Zero Two" 
            width={400} 
            height={400} 
            className="rounded-lg shadow-lg w-full h-auto"
            unoptimized
          />
          <Image 
            src="https://i.pinimg.com/736x/03/64/e8/0364e83560c3dc21a7e3fab45bc90854.jpg" 
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
