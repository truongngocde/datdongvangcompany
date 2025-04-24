import { useEffect, useState } from "react";
import banner from '../../assets/bannerImg.png';
import banner1 from '../../assets/banner1.jpg';
import banner2 from '../../assets/banner2.jpg';
import banner3 from '../../assets/bannerGioithieu.jpg';

// Danh sách ảnh slider
const sliderImages = [
  banner3,
];

export default function ImageSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % sliderImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-screen overflow-hidden z-0 mt-10">
      {/* Slider container */}
      <div className="relative w-screen h-[60vh] md:h-[80vh] xl:h-screen">
        <div
          className="flex transition-transform duration-[1200ms] ease-in-out h-full"
          style={{
            width: `${sliderImages.length * 100}%`,
            transform: `translateX(-${current * (100 / sliderImages.length)}%)`,
          }}
        >
          {sliderImages.map((img, idx) => (
            <div
              key={idx}
              className="w-screen h-full flex-shrink-0"
              style={{ width: `${100 / sliderImages.length}%` }}
            >
              <img
                src={img}
                alt={`Slide ${idx + 1}`}
                className="w-full h-full object-cover object-center"
              />
              {/* Overlay Text */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-lg md:text-2xl lg:text-4xl font-bold bg-black/40 px-6 py-3 rounded-full shadow-lg">
                Vững nền móng – Bền niềm tin
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}