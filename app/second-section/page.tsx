import React from 'react';

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
                <video src="/videos/hero4.mp4" className={"rounded-xl md:w-2/5 p-4 md:p-0 "} autoPlay muted loop/>
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