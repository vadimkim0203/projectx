"use client"

import React, { useState } from 'react';

const Contact: React.FC = () => {
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [submitted, setSubmitted] = useState<boolean>(false);
    const [error, setError] = useState<string>('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError(''); // Reset any previous errors

        // Sending form data to the API endpoint
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, message }),
            });

            if (response.ok) {
                setSubmitted(true);
                setName('');
                setEmail('');
                setMessage('');
            } else {
                throw new Error('Failed to send the message');
            }
        } catch (error) {
            setError((error as Error).message);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="max-w-md w-full p-8">
                <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">Contact Us</h1>
                <p className="text-gray-600 text-center mb-4">
                    For any questions or inquiries regarding products or orders on our webshop please contact us at:
                </p>
                <p className="text-gray-600 text-center mb-4">
                    <a href="mailto:oceanstorecs@gmail.com" className="text-blue-500">
                        oceanstorecs@gmail.com
                    </a>
                </p>
                <p className="text-gray-600 text-center mb-4">
                    Customer service hours: Monday-Friday 9 A.M. - 6 P.M. Seoul time
                </p>
                <p className="text-gray-600 text-center mb-4">
                    For general inquiries, please use the form below.
                </p>
                {submitted && <p className="text-green-600 text-center mb-4">Thank you for your message!</p>}
                {error && <p className="text-red-600 text-center mb-4">{error}</p>}
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                            rows={4}
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full rounded-2xl ring-1 ring-black bg-black text-white py-2 px-4 text-xs hover:bg-white hover:text-black"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
