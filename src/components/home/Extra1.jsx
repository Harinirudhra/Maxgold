const iconRender = (val) => {
    switch (val) {
        case "send":
            return (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 32 32" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                </svg>
            );
        default:
            // Render an img tag if the val is a valid image path
            return <img src={val} alt="icon" className="w-10 h-10" />;
    }
}

const ServiceCard = ({ title, description, icon }) => {
    return (
        <div className="p-5 sm:p-6 lg:p-8 rounded-3xl border hover:bg-[#efd69d] border-gray-200  bg-gray-100 relative overflow-hidden">
            <div className="rounded-xl text-gray-900 w-max relative">
                {iconRender(icon)}
            </div>
            <div className="mt-6 space-y-4 relative">
                <h2 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-gray-100">
                    {title}
                </h2>
                <p className="text-gray-700 dark:text-gray-300">
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
        description: 'DIGIGOLD offers the best price for all products compared to live market rates.'
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
        description: 'DIGIGOLD provides all services for its customers 24x7 Globally.'
    },
    {
        id: 6,
        icon: '/NewWhyIcons/gold-ingot.png',
        title: 'High Liquidity',
        description: 'With DIGIGOLD you can buy, sell, gift, and store anywhere, anytime - online.'
    }
]

const Extra1 = () => {
    return (
        <section className="py-20">
            <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 flex flex-col items-start gap-10 xl:gap-14">
                <div className="text-center max-w-3xl mx-auto space-y-4">
                    <h1 className="text-gray-900 dark:text-white font-semibold text-4xl">
                        Why Max Gold
                    </h1>
                    <p className="text-gray-700 dark:text-gray-300 text-base md:text-xl">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {
                        services.map(service => (
                            <ServiceCard key={service.id} {...service} />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Extra1;
