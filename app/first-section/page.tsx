import React from 'react';

const HeroSection = () => (
    <section className={"space-y-10 md:py-20 py-10 bg-gradient-to-r from-gray-0 to-gray-200 "}>
        <div className="container mx-auto text-center">
            <div className="flex justify-center text-6xl font-bold md:px-20 pb-10 text-gradient bg-gradient-to-r from-blue-500 to-green-300 bg-clip-text text-transparent">
                Build a brand and start selling in seconds
            </div>
            <p className="text-lg md:text-xl font-bold mb-10 bg-gradient-to-r from-black to-gray-400 bg-clip-text text-transparent">
                No matter what you sell,
               Bird Software has everything you need to run yor online store
            </p>

            <div className="flex gap-4 pt-10 justify-center">
                <button className={"bg-blue-500 text-white px-10 py-4 rounded-md text-lg font-bold"}>
                    Get Started
                </button>
                <button className={"bg-gray-600 text-white px-10 py-4 rounded-md text-lg font-bold"}>
                    Learn More
                </button>
            </div>
            <div className="py-10">
                <video src="/videos/herosection3.mp4" className={"rounded-xl"} autoPlay muted loop />
            </div>
        </div>
    </section>
);

export default HeroSection;