import React from "react";

const BenefitDetail = ({ params }) => {
    // Define all your benefit data here
    const benefits = {
        1: "Which is better- 18k Vs 22k Gold?",
        2: "Understand the gold weight changes when melting",
        3: "Explaining whether it's good to sell old gold.",
        4: "Where to sell gold for cash in Chennai.",
        5: "Documents required to sell old gold",
        6: "How to get instant cash for selling old gold in Chennai.",
        7: "Finding the best price for selling old gold.",
        8: "Comparison between selling and exchanging gold",
    };

    const benefitsz = {
        1: [
            "Know the Current Gold Price in Chennai with Max Gold, as each has its advantages and characteristics.",
            "Discover the latest updates on gold rates in Chennai with us. At Max Gold, we bring you the precise gold rates for today, 22nd November 2023. Dive into the specifics of 916 KDM hallmark gold, available in both 22 Carat and 24 Carat options. Our rates are legitimate, up-to-the-minute, and provided in various formats, including Rate per gram and Rate per 8 grams. Easily compare today’s 916 KDM gold rate in Chennai with the previous day’s rates to stay informed. Trust us for accurate and transparent updates on the dynamic gold market.",
            "Our comprehensive approach extends beyond just providing the rates. We understand the importance of transparency and comparison. Therefore, we offer a clear breakdown of the difference in 916 KDM gold rates in Chennai compared to the previous day.",
            "At Max Gold, we recognize the value of your gold beyond its market rate. That’s why we provide an exceptional service – instant cash for gold. If you’re looking to liquidate your gold assets quickly, our hassle-free process ensures you get the cash you need promptly. Trust Max Gold for accurate, transparent, and real-time updates on the gold rate in Chennai, and turn your gold into instant cash with ease."
        ],
        2: [
            "When comparing 18k and 22k gold, it’s essential to consider your personal preferences, as each has its advantages and characteristics.",
            "18k gold contains 75% pure gold and is alloyed with other metals such as copper, silver, or zinc for durability and strength. This alloying process makes 18k gold less prone to scratches and dents, making it suitable for everyday wear jewelry. Additionally, 18k gold offers a more diverse range of colors and shades due to the variety of metals used in the alloy, allowing for unique and customized designs.",
            "On the other hand, 22k gold contains 91.6% pure gold and is alloyed with a smaller percentage of other metals. This higher gold content gives 22k gold a richer and more vibrant color, making it particularly desirable for traditional and ceremonial jewelry pieces. However, due to its higher purity level, 22k gold is softer and more prone to scratches and dents, making it less suitable for everyday wear.",
            "Ultimately, the choice between 18k and 22k gold depends on your lifestyle, budget, and aesthetic preferences. If you prioritize durability and versatility, 18k gold may be the better option. However, if you value purity and richness of color, 22k gold may be more appealing. Whichever you choose, both 18k and 22k gold offer timeless beauty and intrinsic value that make them prized choices for jewelry and investment alike."

        ],
        3: [
            "When gold is melted down, its weight can decrease due to the loss of impurities and contaminants. However, the actual amount of weight loss depends on several factors, including the purity of the gold, the melting process used, and the presence of any additional alloys or metals.",
            "Gold is often alloyed with other metals such as silver, copper, or zinc to increase its durability and strength for use in jewelry and other applications. When gold is melted, these additional metals may oxidize or vaporize, causing them to be lost during the melting process. As a result, the overall weight of the melted gold may be slightly less than the original weight of the gold and alloys combined.",
            "It’s essential to work with experienced and reputable goldsmiths or refiners who can accurately measure and account for any weight loss during the melting process. Additionally, it’s crucial to ensure proper documentation and transparency when melting gold to safeguard against any discrepancies or losses.",

        ],
        4: [
            "Whether it’s a good idea to sell old gold depends on individual circumstances and considerations. Here are some factors to weigh:",
            "Financial Need: If you’re in need of cash or have financial goals that could benefit from liquidating assets, selling old gold could be a practical option.",
            "Gold Prices: Monitoring gold prices is essential. Selling when prices are high could yield better returns. However, predicting market movements can be challenging.",
            "Sentimental Value: Consider the sentimental value of the gold items. If they hold significant emotional importance, selling them may not be worth it despite potential financial gains.",
        ],
        5: [
            "To sell gold for cash in Chennai, you can consider various options, including reputable gold buyers and jewelry stores. One option is “Max Gold,” which is a prominent gold buying company in Chennai. They offer transparent processes and competitive rates for purchasing gold items. You can locate “Max Gold” branches or outlets in Chennai and inquire about their gold buying services. Additionally, ensure to compare rates offered by different buyers and establishments to get the best value for your gold items. Remember to bring along proper identification and documentation when selling gold for cash.",
            "When selling gold to Max Gold, customers can rest assured that they are dealing with a reputable and trustworthy buyer committed to offering the best value for their gold assets. Whether you’re looking to liquidate unwanted jewelry or invest in new opportunities, Max Gold is your reliable partner for all your gold selling needs.”",
        ],
        6: [
            "When selling old gold, you typically need to provide certain documents to ensure a smooth and legitimate transaction. Here are the common documents required:",
            "Identification Proof: A valid government-issued photo identification document is usually required, such as a passport, driver’s license, Aadhaar card, or voter ID card. This is necessary for verifying your identity and complying with legal requirements.",
            "Proof of Ownership: While not always mandatory, it’s advisable to provide any documentation that proves ownership of the gold items you’re selling. This could include purchase receipts, invoices, or certificates of authenticity if available.",
            "PAN Card: In some cases, especially for larger transactions, you may be required to provide your Permanent Account Number (PAN) card. This is to comply with financial regulations and to track high-value transactions for tax purposes.",
            "Address Proof: Some buyers may also request a document as proof of your residential address, such as a utility bill, rental agreement, or bank statement. This helps verify your address and establish your credibility as a seller.",
            "Declaration Form: You may need to fill out a declaration or consent form provided by the buyer, confirming that you are the rightful owner of the gold items and that you have the legal right to sell them.",
            "It’s essential to inquire about specific document requirements with the buyer or establishment where you plan to sell your old gold. Different buyers may have varying policies and procedures, so it’s best to be prepared with the necessary documents to facilitate a smooth transaction. Additionally, ensure that you receive a proper receipt or acknowledgment for the sale of your gold items for your records and peace of mind."
        ],
        7: [
            "At Max Gold, you can expect to receive competitive rates and fair evaluations for your old gold items, ensuring that you get the highest price possible when selling your gold. Our establishment is committed to offering transparent processes, accurate assessments, and prompt payouts, making us a trusted destination for selling old gold.",
            "Our experienced professionals utilize advanced testing methods and meticulous procedures to determine the purity and value of your gold items accurately. We consider factors such as purity, weight, and current market rates to ensure that you receive the best price for your gold assets.",
            "Additionally, our commitment to customer satisfaction means that we prioritize building long-term relationships based on trust and integrity. We provide personalized assistance and guidance throughout the selling process, ensuring a seamless and stress-free experience for our customers.",
            "With multiple branches conveniently located in Chennai, Max Gold offers easy accessibility for customers seeking to sell their old gold items. Visit us today and experience the highest price and the best service for selling your old gold at Max Gold.",
        ],
        8: [
            "Deciding between selling gold and exchanging gold depends on individual circumstances, preferences, and goals. Here are some factors to consider when making this decision:",
            "Financial Needs: If you need immediate cash, selling gold may be the better option as it provides you with liquidity. On the other hand, if you’re looking to acquire new gold items or other goods, exchanging gold may be more beneficial.",
            "Market Conditions: Consider the current market conditions and gold prices. If gold prices are high, selling your gold may yield a higher return. Conversely, if gold prices are low, exchanging gold for other goods or services may offer better value.",
            "Value Proposition: Evaluate the value proposition of selling versus exchanging gold. Selling gold provides you with cash, which can be used for any purpose. Exchanging gold allows you to acquire goods or services without spending additional money.",
            "Selling gold can be the optimal choice for several reasons. Firstly, it provides immediate liquidity, allowing you to access cash quickly to meet any urgent financial needs or investment opportunities. Additionally, selling gold eliminates the uncertainty associated with the value of exchanged goods or services, ensuring that you receive the full market value of your gold assets. Furthermore, selling gold offers flexibility, as you can use the cash proceeds for any purpose, whether it’s paying bills, investing in other assets, or saving for the future. Overall, selling gold provides a straightforward and efficient way to monetize your assets and capitalize on favorable market conditions."
        ],
    };

    const { id } = params; // Get the ID from the URL parameters

    return (
        <div className="container mx-auto p-5">
            <div className="bg-[#7b071e] shadow-lg rounded-lg p-6 md:p-8 w-full min-h-screen ">
                <h1 className="text-3xl font-bold  text-white mb-10">
                    {benefits[id] || "Benefit not found"}
                </h1>

                {/* If benefitsz exists for the id, map through the array and render each paragraph */}
                {benefitsz[id] ? (
                    benefitsz[id].map((paragraph, index) => (
                        <p key={index} className="text-white text-xl mb-2 mt-8">
                            {paragraph}
                        </p>
                    ))
                ) : (
                    <p className="text-white text-lg">No details available.</p>
                )}
            </div>
        </div>
    );
};

export default BenefitDetail;
