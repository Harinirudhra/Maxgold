import React from "react";

const BenefitDetail = ({ params }) => {
    // Define all your benefit data here
    const benefits = {
        1: "Detailed information about the gold rate in Chennai today.",
        2: "Comparing the advantages of 18k and 22k gold.",
        3: "Information about how gold weight changes when melting.",
        4: "Detailed information about the gold rate in Coimbatore.",
        5: "Explaining whether it's good to sell old gold.",
        6: "Where to sell gold for cash in Chennai.",
        7: "How to get instant cash for selling old gold in Chennai.",
        8: "Documents required to sell old gold.",
        9: "Details about the purity checking process.",
        10: "Finding the best price for selling old gold.",
        11: "Tips on finding genuine gold buyers.",
        12: "Understanding the differences between 22k and 24k gold.",
        13: "Comparison between selling and exchanging gold."
    };

    const { id } = params; // Get the ID from the URL parameters

    return (

        <div className="container mx-auto p-5">
            <div className="bg-red-700 shadow-lg rounded-lg p-6 md:p-8  w-full sm:w-full md:w-full lg:w-full xl:w-full h-[30rem] sm:h-64 md:h-[30rem] lg:h-[30rem] items-center justify-center text-center">
                <h1 className="text-3xl font-bold text-white mb-4"> {benefits[id] || "Benefit not found"} </h1>
                <p className="text-white text-lg"> {benefits[id] ? benefits[id] : "No details available."} </p>
            </div>
        </div>

    );
};

export default BenefitDetail;
