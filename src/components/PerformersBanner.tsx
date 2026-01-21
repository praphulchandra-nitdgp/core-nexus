import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

// Past performers images - update these paths with actual performer images
const performerImages = [
  "/performers/performer1.jpg",
  "/performers/performer2.jpg",
  "/performers/performer3.jpg",
  "/performers/performer4.jpg",
  "/performers/performer5.jpg",
];

const PerformersBanner = () => {
  const plugin = React.useRef(Autoplay({ delay: 4000, stopOnInteraction: true }));

  return (
    <section id="performers" className="py-12 md:py-16 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 gradient-text">
          Past Performers
        </h2>
        <div className="flex justify-center">
          <Carousel
            opts={{
              loop: true,
              align: "center",
              duration: 30,
            }}
            plugins={[plugin.current]}
            className="w-full max-w-5xl"
          >
            <CarouselContent className="flex items-center">
              {/* Duplicate images for seamless loop */}
              {[...performerImages, ...performerImages].map((src, i) => (
                <CarouselItem key={i} className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <div className="flex justify-center">
                    <div className="h-48 w-48 md:h-56 md:w-56 overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <img
                        src={src}
                        alt={`Performer ${(i % performerImages.length) + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default PerformersBanner;
