'use client'
import React, { useState } from 'react';
import ScrollTrigger from 'react-scroll-trigger';

const iconRender = (val) => {
    switch (val) {
        case "send":
            return (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                </svg>
            );
        default:
            return <img src={val} alt="icon" className="w-10 h-10" />;
    }
}

const ServiceCard = ({ title, description, icon, isVisible, index }) => {
    const delay = index * 100; // Delay in milliseconds (100ms per card)

    return (
        <div
            className={`p-5 sm:p-6 lg:p-8 rounded-3xl border bg-[#7b071e] hover:bg-[#e9a914] border-gray-200 relative overflow-hidden transition-transform transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-500`}
            style={{ transitionDelay: isVisible ? `${delay}ms` : '0ms' }} // Apply delay conditionally
        >
            <div className="rounded-xl text-gray-100 w-max relative">
                {iconRender(icon)}
            </div>
            <div className="mt-6 space-y-4 relative">
                <h2 className="text-lg md:text-xl font-semibold text-gray-100 ">
                    {title}
                </h2>
                <p className="text-white ">
                    {description}
                </p>
            </div>
            <span className="absolute w-32 aspect-square -bottom-16 -right-16 bg-[#550000] rounded-full" />
        </div>
    );
}

const services = [
    {
        id: 1,
        icon: '/NewWhyIcons/price-down.png',
        title: 'Affordability',
        description: 'Max Gold offers the best price for all products compared to live market rates.'
    },
    {
        id: 2,
        icon: '/NewWhyIcons/growth-chart.png',
        title: 'Systematic growth',
        description: 'With our no lock-in period SIP in Gold, you can achieve systematic growth of your investment.'
    },
    {
        id: 3,
        icon: '/NewWhyIcons/guaranted.png',
        title: 'Guaranteed Purity',
        description: 'We assure to serve you the purest 24 karat Products with 99.9% purity and BIS Hallmark.'
    },
    {
        id: 4,
        icon: '/NewWhyIcons/goldbar.png',
        title: 'Security',
        description: 'We serve our customers with the best & trusted vault keeper that provides security for transactions and storage.'
    },
    {
        id: 5,
        icon: '/NewWhyIcons/24-hour-clock.png',
        title: 'Accessibility',
        description: 'Max Gold provides all services for its customers 24x7 Globally.'
    },
    {
        id: 6,
        icon: '/NewWhyIcons/gold-ingot.png',
        title: 'High Liquidity',
        description: 'With Max Gold you can buy, sell, gift, and store anywhere, anytime - online.'
    }
]

const Extra1 = () => {
    const [scrolling, setScrolling] = useState(false);

    return (
        <section className="py-20">
            <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 flex flex-col items-start gap-10 xl:gap-14">
                <div className="text-center max-w-3xl mx-auto space-y-4">
                    <h1 className="text-gray-900 font-semibold text-4xl">
                        Why Max Gold
                    </h1>

                </div>
                <ScrollTrigger onEnter={() => setScrolling(true)} onExit={() => setScrolling(false)}>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                        {
                            services.map((service, index) => (
                                <ServiceCard key={service.id} {...service} isVisible={scrolling} index={index} />
                            ))
                        }
                    </div>
                </ScrollTrigger>
            </div>
        </section>
    )
}

export default Extra1;
