"use client";

import { useState } from "react";
import Image from "next/image";
import { Tabs, Tab } from "./components/ui/tabs";
import { Carousel } from "./components/ui/carousel";
import  "./styles.css"

const planets = [
  {
    name: "Mercurio",
    image: "/mercurio.jpg",
    mass: "3.285 × 10^23 kg",
    distance: "57.9 millones km",
    temperature: "167°C",
  },
  { 
    name: "Venus",
    image: "/venus.jpg",
    mass: "4.867 × 10^24 kg",
    distance: "108.2 millones km",
    temperature: "464°C",
  },
  {
    name: "Tierra",
    image: "/tierra.jpg",
    mass: "5.972 × 10^24 kg",
    distance: "149.6 millones km",
    temperature: "15°C",
  },
  {
    name: "Marte",
    image: "/marte.jpg",
    mass: "6.39 × 10^23 kg",
    distance: "227.9 millones km",
    temperature: "-65°C",
  },
];

export default function PlanetSlider() {
  const [selectedPlanet, setSelectedPlanet] = useState(planets[0]);

  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-3xl font-bold mb-4">Planetas del Sistema Solar</h1>
      <Carousel>
        {planets.map((planet, index) => (
          <div
            key={index}
            className="cursor-pointer p-2"
            onClick={() => setSelectedPlanet(planet)}
          >
            <Image
              src={planet.image}
              alt={planet.name}
              width={150}
              height={150}
              className="rounded-full shadow-lg"
            />
            <p className="text-center mt-2 font-semibold">{planet.name}</p>
          </div>
        ))}
      </Carousel>
      <div className="mt-6 w-full max-w-md">
        <Tabs>
          <Tab title="Masa">
            <p>{selectedPlanet.mass}</p>
          </Tab>
          <Tab title="Distancia al Sol">
            <p>{selectedPlanet.distance}</p>
          </Tab>
          <Tab title="Temperatura">
            <p>{selectedPlanet.temperature}</p>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}
