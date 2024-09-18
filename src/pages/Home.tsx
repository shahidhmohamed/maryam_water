import React from "react";

const HomePage = () => {
  return (
    <div className="bg-white h-full flex items-center justify-center p-8">
      {/* Container for two cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-5xl w-full">
        {/* First Card */}
        <div className="rounded-2xl relative overflow-hidden">
          {/* Background Image */}
          <div className="relative">
            <img
              src="https://americanwater.lk/assets/img/products/03.png" // Replace with actual image URL
              alt="Bottle water"
              className="object-cover w-full h-40 rounded-lg"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-50"></div>

            {/* Text Content */}
            <div className="absolute top-0 left-0 p-4 text-white">
              <h1 className="text-2xl font-bold">Drips Springs</h1>
              <p className="text-md mt-1">Bottle water delivery</p>
            </div>

            {/* Button */}
            <div className="absolute bottom-0 right-0 p-4">
              <button className="bg-yellow-500 text-black px-4 py-2 rounded-md font-semibold hover:bg-yellow-600 transition">
                Quick Shop
              </button>
            </div>
          </div>
        </div>

        {/* Second Card */}
        <div className="rounded-2xl relative overflow-hidden">
          {/* Background Image */}
          <div className="relative">
            <img
              src="https://americanwater.lk/assets/img/products/03.png" // Replace with actual image URL
              alt="Bottle water"
              className="object-cover w-full h-40 rounded-lg"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-50"></div>

            {/* Text Content */}
            <div className="absolute top-0 left-0 p-4 text-white">
              <h1 className="text-2xl font-bold">Aqua Pure</h1>
              <p className="text-md mt-1">Fresh water supply</p>
            </div>

            {/* Button */}
            <div className="absolute bottom-0 right-0 p-4">
              <button className="bg-yellow-500 text-black px-4 py-2 rounded-md font-semibold hover:bg-yellow-600 transition">
                Quick Shop
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
