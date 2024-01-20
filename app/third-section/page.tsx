import React from 'react';
import Image from "next/image";

const ThirdSection = () => (
    <div className={"flex flex-col md:flex-row md:justify-evenly p-10 "}>
        {/*Third section*/}
        <div className="flex-col md:flex-row gap-6 md:px-10 flex">

            {/*Video section*/}
            <div className="md:w-2/3 w-full">
                <video src={"/content/video-4.mp4"} className={"rounded-xl"} autoPlay muted loop/>
            </div>
            <div className="p-4 md:w-2/5 border rounded-xl">
                {/*Callout*/}
                <div className="flex justify-center text-center text-4xl md:text-6xl font-bold bg-gradient-to-b from-yellow-300 to-blue-300 bg-clip-text text-transparent">
                    Fully customisable eCommerce Apps
                </div>
                <ProductFeature imageURL={"/images/icon-store.png"}>
                    Choose a variety of store templates and get started, And Customise your store to fit your brand
                </ProductFeature>
                <ProductFeature imageURL={"/images/icon-product.png"}>
                    Add unlimited products and variations. And Manage your inventory with ease
                </ProductFeature>
                <ProductFeature imageURL={"/images/icon-analytics.png"} >
                    Best in class security to protect your data and your customers
                </ProductFeature>
            </div>
        </div>
    </div>
);



interface ProductFeatureProps {
    imageURL: string,
    children: any
}

const ProductFeature = ({ imageURL, children}: ProductFeatureProps) => {
    return (
        <div className="md:px-20 space-y-6 flex-col justify-center items-center flex">
            <div className="flex gap-4 pt-10  text-5xl font-medium ">
                <Image src={imageURL} alt={"icon"} height={70} width={70}/>
                <div className="flex flex-col gap-2 text-xl font-medium">
                    {children}
                </div>
            </div>
        </div>
    );
};



export default ThirdSection;