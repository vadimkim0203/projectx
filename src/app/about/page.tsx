"use client"

import React from 'react';

const About = () => {
    return (
        <div className="bg-gray-100 min-h-screen flex items-center justify-center">
            <div className="max-w-3xl w-full bg-white rounded-lg shadow-lg p-8">
                <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">About Us</h1>
                <p className="text-gray-600 mb-4">
                    Welcome to our website! We are dedicated to providing you with the best service. Our team is committed to ensuring that you have an exceptional experience with us.
                </p>
                <p className="text-gray-600 mb-4">
                TROVE is a wholesale Korean clothing distributor dedicated to bringing you the latest trends and high-quality apparel. Our mission is to connect retailers with exceptional clothing options that meet the diverse needs of their customers.
                </p>
                <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">Our Values</h2>
                <ul className="list-disc list-inside text-gray-600 mb-4">
                    <li>Quality: We prioritize the highest standards in everything we do.</li>
                    <li>Integrity: We believe in being honest and transparent.</li>
                    <li>Customer Focus: Our customers are at the heart of our business.</li>
                </ul>
                <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">Get in Touch</h2>
                <p className="text-gray-600">
                    If you have any questions or feedback, feel free to reach out to us!
                </p>
            </div>
        </div>
    );
};

export default About;
