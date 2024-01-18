'use client'

import React, {useEffect, useState} from 'react';
import {AnimatePresence,motion} from "framer-motion";
import Image from "next/image";


const images = [
    {
        url: '/images/logo/logoipsum-321.svg',
        alt: 'logo'
    },
    {
        url: '/images/logo/logoipsum-327.svg',
        alt: 'logo'
    },
    {
        url: '/images/logo/logoipsum-329.svg',
        alt: 'logo'
    },
    {
        url: '/images/logo/logoipsum-330.svg',
        alt: 'logo'
    },
    {
        url: '/images/logo/logoipsum-331.svg',
        alt: 'logo'
    },
    {
        url: '/images/logo/logoipsum-332.svg',
        alt: 'logo'
    },
    {
        url: '/images/logo/ChakulaTrust.png',
        alt: 'logo'
    },


]
const Carousel = () => {
    const [currImage, setCurrImage] = useState(0);

    useEffect(() => {
          const interval = setInterval(() => {
              setCurrImage((prevImage) => prevImage === images.length -1 ? 0 : prevImage + 1)
          }, 5000);

          return () => {
              clearInterval(interval)
          }
    }, []);

    return (
        <div>
            <div className="flex items-center justify-center md:pb-10 px-10 text-3xl font-bold bg-gradient-to-r from-blue-500 to-green-300 bg-clip-text text-transparent">
                More than 100+ brands have built their business with Bird Software
            </div>

            <div className="grid grid-cols-3 p-4 md:flex md:justify-center" >
                <AnimatePresence custom={currImage}>
                    {
                        images.map((image,index) => (
                            <motion.div
                                key={index}
                                initial={{opacity: 0}}
                                animate={{
                                    opacity: index === currImage ? 1:0.5 ,
                                    scale: index === currImage ? 1.3 :1,
                                    transition: {duration: 0.5}
                                }}
                                className={"flex items-center justify-center h-40 w-40 "}
                                exit={{ opacity:0}}
                                custom={index}
                                transition={{
                                    opacity: {duration: 0.5}
                                }}
                            >
                                <Image src={image.url} alt={image.alt} width={200} height={200} className={"object-contain h-20 w-20 flex items-center justify-center mx-auto" }/>
                            </motion.div>
                        ))
                    }
                </AnimatePresence>
            </div>
        </div>
    )
}

export default Carousel;