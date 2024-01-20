import React from 'react';
import Image from "next/image";

function About() {
    return (
        <div>
            <div className="flex flex-col items-center justify-center md:flex-row pb-10 ">
                <div className=" md:w-1/3 p-5">
                    {/* about us*/}
                    <div className="bg-gradient-to-r from-blue-500 to-green-300 bg-clip-text text-transparent text-4xl md:text-6xl font-bold pb-10">
                        {/*Side text*/}
                        From startup to enterprise, Bird is built for every type of business
                    </div>
                    <div className="text-2xl mb-8 ">
                        {/*paragraph*/}
                        Built for all businesses and communities, Bird is the only platform you need to grow your business
                    </div>
                    <button className={"bg-blue-500 text-white p-4 justify-center flex md:w-1/3 rounded-lg hover:bg-blue-600"}>Get started</button>
                </div>
                <video src="/videos/hero4.mp4" className={"rounded-xl md:w-2/5"} autoPlay muted loop/>
            </div>

            {/*Products section*/}
            <div className="flex-col items-center justify-center">
                <div className="flex justify-center text-3xl font-bold md:text-5xl pt-5 pb-10 bg-gradient-to-r from-purple-400 to-blue-800 bg-clip-text text-transparent">
                    Product Features
                </div>
                <div className="grid grid-cols-1 md:grid md:grid-cols-3 gap-4  p-4 px-40">
                    {features.map((feature,index) => (

                        <div key={index} className={"flex-col space-y-6 pb-10 border p-8 rounded-xl items-center justify-center w-full hover:scale-105 transform transition-all duration-500 ease-in-out"}>
                            <div className="text-gray-600 text-3xl font-bold">
                                <Image src={feature.image} alt={feature.alt} width={300} height={300} className={"object-contain h-20 w-20 items-center justify-center flex mb-10"}/>
                                <div className="">
                                    <div className="text-2xl pb-4 bg-gradient-to-t from-black to-gray-400  bg-clip-text text-transparent">
                                        {feature.name}
                                    </div>
                                    <div className="text-lg bg-gradient-to-r from-gray-800 to-gray-500 bg-clip-text text-transparent" >
                                        {feature.description}
                                    </div>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}

const features = [
    {
        name: "Customizable",
        description:
            "Choose from 100s of designer made templates, and change anything you want to create your professional eCommerce website.",
        image: "/images/icon-cloud.png",
        alt: "Customizable",
        color: "blue"
    },
    {
        name: "Fast ",
        description:
            "Choose from 100s of designer made templates, and change anything you want to create your professional eCommerce website.",
        image: "/images/icon-fast.png",
        alt: "Customizable",
    },
    {
        name: "Integrations",
        description:
            "Choose from 100s of designer made templates, and change anything you want to create your professional eCommerce website.",
        image: "/images/icon-journey.png",
        alt: "Customizable",
    },
    {
        name: "Full Stack",
        description:
            "Choose from 100s of designer made templates, and change anything you want to create your professional eCommerce website.",
        image: "/images/icon-layer.png",
        alt: "Customizable",
    },
    {
        name: "Loyalty",
        description:
            "Set up your loyalty program and start rewarding your customers for their purchases and actions they take on your site.",
        image: "/images/icon-location.png",
        alt: "Customizable",
    },
    {
        name: "Support",
        image: "/images/icon-support-1.png",
        description: "Get 24/7 support from our team to help you with any issues you have.",
        alt: "Customizable",
    },
]
export default About;