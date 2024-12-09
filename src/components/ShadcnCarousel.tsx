import { Card, CardContent } from "./shadcn-ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./shadcn-ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import banner5 from "../assets/banner5.webp";
import banner6 from "../assets/banner6.webp";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "./shadcn-ui/button";

const banners = [banner5, banner6];

export function ShadcnCarousel() {
  const plugin = useRef(Autoplay({ delay: 7000, stopOnInteraction: true }));
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      className="m-0 h-full w-full max-w-fit"
    >
      <CarouselContent>
        {banners.map((banner, index) => (
          <CarouselItem key={index}>
            <div className="h-full w-full">
              <Card className="max-h-screen bg-transparent">
                <CardContent className="flex items-center justify-center p-0">
                  <img src={banner} alt="" className="object-cover" />
                  <div className="absolute flex flex-col items-center justify-center px-4 text-center text-white sm:px-8">
                    <h1 className="text-md font-bold sm:text-2xl md:text-4xl">
                      Welcome to the Star Wars App
                    </h1>
                    <p className="my-2 text-xs sm:my-4 sm:text-sm md:my-8 md:text-lg">
                      Explore the vast universe of Star Wars. Discover
                      characters, planets, starships, and more from the iconic
                      saga. Dive into the adventures and relive the epic moments
                      from a galaxy far, far away.
                    </p>
                    <Link to="/starships">
                      <Button className="secondary bg-zinc-800 hover:bg-orange-700">
                        Explore
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-4 top-1/2 h-6 w-6 -translate-y-1/2 transform bg-transparent sm:left-8 lg:left-10" />
      <CarouselNext className="absolute right-4 top-1/2 h-6 w-6 -translate-y-1/2 transform bg-transparent sm:right-8 lg:right-10" />
    </Carousel>
  );
}
