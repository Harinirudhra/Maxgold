'use client'
import React, { useState, useEffect, useRef } from 'react';
import CountUp from 'react-countup';

const Countup = () => {
    const facts = [
        {
            number: 10000,
            label: 'Users',
            description: 'Empower your decisions with our AI-driven predictive analytics, foreseeing market trends that keep you a step ahead.'
        },
        {
            number: 460,
            label: 'Components',
            description: 'Empower your decisions with our AI-driven predictive analytics, foreseeing market trends that keep you a step ahead.'
        },
        {
            number: 50,
            label: 'Time Savings (%)',
            description: 'Empower your decisions with our AI-driven predictive analytics, foreseeing market trends that keep you a step ahead.'
        },
        {
            number: 5,
            label: 'Star User Satisfaction',
            description: 'Empower your decisions with our AI-driven predictive analytics, foreseeing market trends that keep you a step ahead.'
        }
    ];

    const [startCount, setStartCount] = useState(false);
    const counterRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const elementPosition = counterRef.current.getBoundingClientRect().top;
            const viewportHeight = window.innerHeight;

            if (elementPosition < viewportHeight && !startCount) {
                setStartCount(true);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [startCount]);

    return (
        <div>
            <section>
                {/* Container */}
                <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">
                    {/* Title */}
                    <div className="mb-12 flex flex-col">
                        <h2 className="mb-8 text-3xl max-w-lg font-bold md:mb-12 md:text-5xl lg:mb-16">
                            Facts about MaxGold
                        </h2>
                        <p className="text-sm text-gray-500 max-w-lg">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate at suscipit fuga, alias nemo laudantium odio eos dolorem explicabo necessitatibus, aut eius, reprehenderit porro quaerat ad quisquam quasi commodi ullam!
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4" ref={counterRef}>
                        {/* FactsCard */}
                        {facts.map((fact, index) => (
                            <div key={index} className="bg-gray-100 rounded-lg py-10 px-5 flex flex-col justify-between h-80">
                                <div className="text-xl font-semibold">
                                    <h3 className=' text-2xl font-black'>
                                        {startCount ? (
                                            <CountUp
                                                start={0}
                                                end={fact.number}
                                                duration={10}  // Customize duration if needed
                                                suffix={fact.label.includes('%') ? '%' : ''}
                                            />
                                        ) : fact.number}
                                    </h3>
                                    <p>{fact.label}</p>
                                </div>
                                <p className="mt-2 text-sm">
                                    {fact.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Countup;
