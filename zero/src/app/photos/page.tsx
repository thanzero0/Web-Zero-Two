"use client";

import { useState } from "react";
import Image from "next/image";

export default function Photos() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const images: string[] = [
    
"https://i.pinimg.com/736x/8c/16/a7/8c16a7c5868bea305ef63694cc558636.jpg",
"https://i.pinimg.com/736x/41/a4/3b/41a43ba1f51316414a6255277c224b6e.jpg",
"https://i.pinimg.com/736x/d8/7b/fe/d87bfe94b75bc66c6d90229e56f68de1.jpg",
"https://i.pinimg.com/736x/7e/72/28/7e72287f31f69b7ad0c25378b0d7f549.jpg",
"https://i.pinimg.com/736x/cd/0c/b9/cd0cb955c6ee15776c6f51ccf3e5426e.jpg",
"https://i.pinimg.com/736x/a2/43/5c/a2435c8a9fceca3d6679a05d5928faef.jpg",
"https://i.pinimg.com/1200x/d9/0f/44/d90f44bdd5f878d69fd6ad3021c0b11f.jpg",
"https://i.pinimg.com/736x/03/64/e8/0364e83560c3dc21a7e3fab45bc90854.jpg",
"https://i.pinimg.com/736x/aa/87/cf/aa87cfbaeb3e9960cb39be5a02fe93ad.jpg",
"https://i.pinimg.com/736x/f0/ee/8d/f0ee8ddb6c9859999cb247a185f3ed66.jpg",
"https://i.pinimg.com/736x/17/01/06/170106c2be8f30c868ed298773ba9e50.jpg",
"https://i.pinimg.com/736x/82/74/0c/82740c247bb2ee2f73165646d9c28896.jpg",
"https://i.pinimg.com/736x/df/8b/22/df8b223adefdd7a59a09d0bc4b34263e.jpg",
"https://i.pinimg.com/736x/c9/7d/ca/c97dca1a28c65c1617f61cbe7e68439b.jpg",
"https://i.pinimg.com/736x/ca/01/52/ca0152d4a1e1a0a6f5225bc9ca2a33cf.jpg",
"https://i.pinimg.com/474x/a6/ec/23/a6ec23ef9dcd2c6e9c15a7d9acbd443a.jpg",
"https://i.pinimg.com/1200x/7b/bd/6d/7bbd6d2ae1231cf3f9c119d3282852aa.jpg",
"https://i.pinimg.com/1200x/f7/84/bf/f784bf03d6ee2a4cb7ae2c3729378510.jpg",
"https://i.pinimg.com/736x/4a/b3/bb/4ab3bbdc1d50f2f989f20e4204e30f4e.jpg",
"https://i.pinimg.com/736x/e6/e3/a3/e6e3a343d3edadf34a4aaaaa2f39315a.jpg",
"https://i.pinimg.com/736x/1a/e5/e2/1ae5e277107638498ff8b5d1c02d051c.jpg",
"https://i.pinimg.com/736x/6a/2a/fe/6a2afe8c0541a4c9e5b95c232e64fcf7.jpg",
"https://i.pinimg.com/736x/f2/5b/74/f25b741da2101d92f5ff8ba1d163a7b5.jpg",
"https://i.pinimg.com/736x/b4/28/eb/b428eb758c9545d3b6736d54d879ceb9.jpg",
"https://i.pinimg.com/736x/01/d0/19/01d019f51774b79a8a13a3d5fccd5194.jpg",
"https://i.pinimg.com/736x/28/cf/61/28cf61d359423b73043e1f772d2c9721.jpg",
"https://i.pinimg.com/736x/bd/8f/bf/bd8fbfffae348f74c972b0e44a1d69ff.jpg",
"https://i.pinimg.com/1200x/c4/3a/c4/c43ac4fdd7d7c18fa060d5689d1f0ca9.jpg",
"https://i.pinimg.com/1200x/53/49/bb/5349bbe1f349e48a9f06c35bd905be23.jpg",
"https://i.pinimg.com/736x/f6/70/20/f670201bf0ce48d88e65bb8e0c76d90d.jpg",
"https://i.pinimg.com/736x/98/4b/38/984b38a06de6caa4822d7a9bcff30239.jpg",
"https://i.pinimg.com/1200x/a8/cd/68/a8cd687352d37d5e8c54c5fb5e909569.jpg",
"https://i.pinimg.com/736x/c4/4c/da/c44cda539c58be31e3f4155ca0f6fb9b.jpg",
"https://i.pinimg.com/736x/2f/16/46/2f1646e745801cdfe57047896ce684e0.jpg",
"https://i.pinimg.com/736x/b7/4a/27/b74a2774f4336abfa101536ccb441c7e.jpg",
"https://i.pinimg.com/736x/a9/b8/4c/a9b84cd5b10be74be31e0c12cc8cf068.jpg",
"https://i.pinimg.com/736x/ba/10/9d/ba109d0dbbd89f40accb62b768b148a7.jpg"
  ];

  const next = () => {
    setActiveIndex((prev) => {
      if (prev === null) return 0;
      return (prev + 1) % images.length;
    });
  };

  const prev = () => {
    setActiveIndex((prev) => {
      if (prev === null) return 0;
      return prev === 0 ? images.length - 1 : prev - 1;
    });
  };

  return (
    <div>
      <div className="photo-masonry p-2">
        {images.map((src, index) => (
          <div
           key={index}
           className="photo-item cursor-pointer"
           onClick={() => setActiveIndex(index)}
           >
            <Image
              src={src}
              alt="gallery image"
              width={400}
              height={600}
              className="rounded-lg shadow-lg w-full transition hover:scale-[1.02]"
              unoptimized
            />
          </div>
        ))}
      </div>


      {activeIndex !== null && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <button
            className="absolute top-5 right-5 text-white text-3xl"
            onClick={() => setActiveIndex(null)}
          >
            ✕
          </button>

          <button
            className="absolute left-5 text-white text-4xl"
            onClick={prev}
          >
            ‹
          </button>

          <Image
            src={images[activeIndex]}
            alt="preview"
            width={800}
            height={1200}
            className="max-h-[90vh] w-auto rounded-lg"
            unoptimized
          />

          <button
            className="absolute right-5 text-white text-4xl"
            onClick={next}
          >
            ›
          </button>
        </div>
      )}
    </div>
  );
}
