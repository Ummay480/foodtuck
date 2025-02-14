import React from "react";
import Image from "next/image";

const chefs = [
  { name: "Tahmina Rumi", role: "Chef", image: "/images/image-21.png" },
  { name: "Jorina Begum", role: "Chef", image: "/images/image-22.png" },
  { name: "M. Mohammad", role: "Chef", image: "/images/image-23.png" },
  { name: "Munna Kathy", role: "Chef", image: "/images/image-24.png" },
  { name: "Tahmina Rumi", role: "Cook", image: "/images/image-25.png" },
  { name: "Bisnu Devgon", role: "Chef", image: "/images/image-26.png" },
  { name: "Motin Molladst", role: "Chef", image: "/images/image-112.png" },
  { name: "William Rumi", role: "Chef", image: "/images/image-38.png" },
  { name: "Kets William Roy", role: "Chef", image: "/images/image-29.png" },
  { name: "Mahmud Kholil", role: "Chef", image: "/images/image-30.png" },
  { name: "Ataur Rahman", role: "Chef", image: "/images/image-27.png" },
  { name: "Monalisa Holly", role: "Chef", image: "/images/image-28.png" },
];

const ChefGrid = () => {
  return (
    <div className="p-6 mt-20"> {/* Adding mt-20 for margin top */}
      {/* Grid with responsive columns */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-6">
        {chefs.map((chef, index) => (
          <div
            key={index}
            className={`rounded-lg shadow-lg bg-white flex flex-col transition-transform transform hover:scale-105 hover:shadow-xl ${
              index === 6
                ? "border-gray-200" // Complete purple border for the 7th box
                : "border-4 border-transparent hover:border-gray-200" // Hover effect for other boxes
            }`}
          >
            {/* Chef Image */}
            <div className="flex-1">
              <Image
                src={chef.image}
                alt={chef.name}
                width={300}
                height={300}
                className="w-full h-full object-cover rounded-t-lg"
              />
            </div>

            {/* Static Information Section Below Image */}
            <div className="p-4 text-center">
              <h3 className="text-gray-800 font-bold text-lg">{chef.name}</h3>
              <p className="text-gray-600">{chef.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChefGrid;
