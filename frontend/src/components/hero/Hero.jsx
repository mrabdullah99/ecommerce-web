import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
const sliderData = [
  {
    id: 1,
    title: "Experience Pure Sound - Your Perfect Headphones Awaits!",
    offer: "Limited Time Offer 30% Off",
    buttonText1: "Buy now",
    buttonText2: "Find more",
    imgSrc: `${import.meta.env.VITE_API_URL}/uploads/header_headphone_image.png`,
  },
  {
    id: 2,
    title: "Next-Level Gaming Starts Here - Discover PlayStation 5 Today!",
    offer: "Hurry up only few lefts!",
    buttonText1: "Shop Now",
    buttonText2: "Explore Deals",
    imgSrc: `${import.meta.env.VITE_API_URL}/uploads/header_playstation_image.png`,
  },
  {
    id: 3,
    title: "Power Meets Elegance - Apple MacBook Pro is Here for you!",
    offer: "Exclusive Deal 40% Off",
    buttonText1: "Order Now",
    buttonText2: "Learn More",
    imgSrc: `${import.meta.env.VITE_API_URL}/uploads/header_macbook_image.png`,
  },
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = sliderData.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, 3000);
    return () => clearInterval(interval);
  }, [totalSlides]);

  const nextSlide = () => (prev) => (prev + 1) % totalSlides;
  const prevSlide = () =>
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);

  return (
    <section>
      <div className="bg-[#E6E9F2] max-w-5xl py-8 px-4 md:px-14 mx-5 md:mx-auto mt-6 rounded-xl overflow-hidden">
        <div
          className="w-full flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {sliderData.map((slide) => (
            <div
              key={slide.id}
              className="w-full flex-shrink-0 mt-4 md:mt-10 mx-auto flex flex-col-reverse md:flex-row items-center md:items-stretch"
            >
              <div className="max-w-md mt-7 md:mt-0 flex flex-col">
                <p className="text-blue-600 font-semibold">{slide.offer}</p>
                <h1 className="text-2xl md:text-4xl font-bold">
                  {slide.title}
                </h1>
                <div className="flex gap-5 mt-9">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white  px-7 py-1.5 rounded-4xl">
                    {slide.buttonText1}
                  </button>
                  <button className="group flex gap-2 font-medium items-center">
                    {slide.buttonText2}
                    <ArrowRight
                      className="group-hover:translate-x-1 transition-transform"
                      size={20}
                    />
                  </button>
                </div>
              </div>
              <div>
                <img
                  src={slide.imgSrc}
                  alt="Image"
                  className="w-50 md:w-[260px]"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* DOT INDICATORS */}
      <div className="flex justify-center gap-2 mt-4">
        {sliderData.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full cursor-pointer transition-all ${
              currentIndex === index ? "bg-blue-600" : "bg-gray-300"
            }`}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
