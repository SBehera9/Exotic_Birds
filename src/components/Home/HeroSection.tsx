'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

const images = [
    "/Main_Image.jpg",
    "/Dog1.jpg",
    "/Cat1.jpg",
    "/Fish1.jpeg"
];

const HeroSection = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const router = useRouter(); // Initialize router

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    const handleEnquireClick = () => {
        router.push('/ContactUsSection'); // Redirects to the Contact page
    };

    return (
        <div className="relative h-screen w-full overflow-hidden">
            <div className="absolute inset-0 transition-opacity duration-1000 ease-in-out">
                <Image
                    key={images[currentImage]}
                    src={images[currentImage]}
                    alt="Pet Shop Background"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                    className="brightness-75"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/60"></div>
            </div>

            <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-3xl"
                >
                    <h1 className="text-4xl font-extrabold text-white drop-shadow-lg sm:text-5xl lg:text-6xl">
                        Exotic Pet Shops
                    </h1>
                    <p className="mt-4 text-lg text-gray-200 sm:text-xl">
                        Assured Quality & Reliable Products
                    </p>
                </motion.div>
            </div>
        </div>
    );
};

export default HeroSection;
