'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import Link from 'next/link';

export default function Page() {
    return (
        <motion.div
            className="w-screen h-screen bg-beige-50 flex flex-col justify-center items-center p-3"
            style={{ backgroundColor: '#f5f5dc' }} // Beige background color applied directly
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <h1 className="text-6xl font-extrabold text-red-600 mb-4">
                Error 503
            </h1>
            <h2 className="text-2xl font-medium text-gray-800 text-center mb-6">
                Love is in the Air... and Updates Too!
            </h2>
            <p className="text-lg text-gray-600 text-center mb-2 leading-relaxed">
                Our servers are on a date preparing for a grand reveal on{' '}
                <span className="font-bold text-gray-900">March 01</span>.
                We can’t wait to share our new look with you!
            </p>
            <p className="text-lg text-gray-500 italic mb-8">
                Hang tight and enjoy the love-filled vibes until then. ❤️
            </p>

            {/* Animated Image Container */}
            <motion.div
                className="relative mt-8 group hover:cursor-pointer transition-transform duration-300"
                initial={{ y: 0 }}
                animate={{
                    y: [0, -10, 0], // Float up and down
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: 'loop',
                }}
                whileHover={{
                    scale: 1.05,
                    rotate: -3,
                    transition: { duration: 0.3 },
                }}
            >
                <Image
                    src="/assets/error/tay.png"
                    alt="Valentine Loading"
                    width={250}
                    height={250}
                    className="opacity-100 transition-opacity duration-300"
                />
            </motion.div>

            {/* Additional Text Below Image */}
            <p className="text-sm text-gray-600 text-center mt-4">
                <Link href="/so-high-school">
                    Can’t wait? Click above to revisit the previous version of the site!
                </Link>
            </p>

            {/* Upcoming Event Announcement */}
            <div className="mt-8 text-center">
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                    Upcoming Event
                </h3>
                <p className="text-md text-gray-600">
                    Annual Election on <span className="font-bold text-gray-900">March 05</span>
                    <br />
                    <span className="text-sm text-gray-500">
                        (Details will be shared soon)
                    </span>
                </p>
            </div>

            <p className="text-sm text-gray-500 mt-8">
                Error Code: 503 - Service Unavailable
            </p>
            <p className="text-sm text-gray-500 mt-2">
                Happy Valentine&apos;s Day! 💘
            </p>
        </motion.div>
    );
}
