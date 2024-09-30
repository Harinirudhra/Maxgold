// "use client";
// import React from 'react';


// const AboutFAQ = () => {
//   return (
//     <div>
//       <section class="sm:py-10 bg-gradient-to-b from-[#fdc662] to-[#f6a606] overflow-hidden" id="faq">
//         <div class="container mx-auto px-4">
//             <div class="relative py-16 px-8 bg-yelloww overflow-hidden rounded-3xl">
//                 <div class="relative z-10 md:max-w-7xl mx-auto">
//                     <div class="md:max-w-xl mb-10"><span class="inline-block mb-5 text-md text-black  font-bold uppercase tracking-widest">Frequently
//                             asked questions</span>
//                         <h2 class="font-heading text-4xl  text-black lg:text-5xl font-bold font-heading">
//                             Got questions? Were here to help!</h2>
//                     </div>
//                     <div class="flex flex-wrap -m-3">
//                         <div class="w-full p-3">
//                             <div class="p-10 bg-gradient-to-r from-[#da0000] to-[#b81619] rounded-2xl">
//                                 <div class="flex flex-wrap -m-2">
//                                     <div class="w-full md:w-1/2 p-2">
//                                         <h3 class="font-heading text-xl text-white font-black">How soon will I
//                                             receive the voucher code once I make the payment?
//                                         </h3>
//                                     </div>
//                                     <div class="w-full md:w-1/2 p-2">
//                                         <p class="text-white font-medium">You will receive the voucher code
//                                             immediately via email and SMS once you make the payment. The process is
//                                             completely automated and takes only 30 seconds.
//                                         </p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div class="w-full p-3">
//                             <div class="p-10 bg-gradient-to-r from-[#da0000] to-[#b81619] rounded-2xl">
//                                 <div class="flex flex-wrap -m-2">
//                                     <div class="w-full md:w-1/2 p-2">
//                                         <h3 class="font-heading text-xl text-white font-black">Within what timeframe
//                                             do I need to book the slot after purchasing the voucher?
//                                         </h3>
//                                     </div>
//                                     <div class="w-full md:w-1/2 p-2">
//                                         <p class="text-white font-medium">This voucher is valid for 11 months. It is
//                                             important to complete your exam within this 11-month period starting from
//                                             the date of purchase.
//                                         </p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div class="w-full p-3">
//                             <div class="p-10 bg-gradient-to-r from-[#da0000] to-[#b81619] rounded-2xl">
//                                 <div class="flex flex-wrap -m-2">
//                                     <div class="w-full md:w-1/2 p-2">
//                                         <h3 class="font-heading text-xl text-white font-black">Is this refundable?
//                                         </h3>
//                                     </div>
//                                     <div class="w-full md:w-1/2 p-2">
//                                         <p class="text-white font-medium">Sure, if you change your mind and plan not
//                                             to appear for Toefl Academic and return the unused voucher code to us, we
//                                             will
//                                             happily refund 70% of the amount within 6 months of purchase.
//                                         </p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>

//                         <div class="w-full p-3">
//                             <div class="p-10 bg-gradient-to-r from-[#da0000] to-[#b81619] rounded-2xl">
//                                 <div class="flex flex-wrap -m-2">
//                                     <div class="w-full md:w-1/2 p-2">
//                                         <h3 class="font-heading text-xl text-white font-black">Can I book any
//                                             available slot?
//                                         </h3>
//                                     </div>
//                                     <div class="w-full md:w-1/2 p-2">
//                                         <p class="text-white font-medium">Yes, you can book any available slot across
//                                             India. You just need to book your slot 48 hours in advance.
//                                         </p>
//                                     </div>
//                                 </div>

//                             </div>
//                         </div>
//                         <div class="w-full p-3">
//                             <div class="p-10 bg-gradient-to-r from-[#da0000] to-[#b81619]  rounded-2xl">
//                                 <div class="flex flex-wrap -m-2">
//                                     <div class="w-full md:w-1/2 p-2">
//                                         <h3 class="font-heading text-xl text-white font-black lg:pr-10">Do I have to
//                                             pay anything extra at PearsonToefl.com website at the time of slot booking?
//                                         </h3>
//                                     </div>
//                                     <div class="w-full md:w-1/2 p-2">
//                                         <p class="text-white font-medium">No, you dont have to pay anything extra on
//                                             PearsonToefl.com website to book your slot. This prepaid Toefl voucher is
//                                             inclusive of GST and covers the full cost of Toefl Academic.
//                                         </p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div class="w-full p-3">
//                             <div class="p-10 bg-gradient-to-r from-[#da0000] to-[#b81619] rounded-2xl">
//                                 <div class="flex flex-wrap -m-2">
//                                     <div class="w-full md:w-1/2 p-2">
//                                         <h3 class="font-heading text-xl text-white font-black">
//                                             Can you book my slot for me?
//                                         </h3>
//                                     </div>
//                                     <div class="w-full md:w-1/2 p-2">
//                                         <p class="text-white font-medium">Sure, if you are new to TOEFL and GRE and
//                                             dont know
//                                             how to book your slot, our team will happily help you to book your slot or
//                                             we will book it for you.

//                                         </p>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div class="w-full p-3">
//                             <div class="p-10 bg-gradient-to-r from-[#da0000] to-[#b81619] rounded-2xl">
//                                 <div class="flex flex-wrap -m-2">
//                                     <div class="w-full md:w-1/2 p-2">
//                                         <h3 class="font-heading text-xl text-white font-black">Can you give me some
//                                             more discount?
//                                         </h3>
//                                     </div>
//                                     <div class="w-full md:w-1/2 p-2">
//                                         <p class="text-white font-medium">Unfortunately, we cannot provide any
//                                             further discount. There is no room for any additional discount since these
//                                             are genuine vouchers and they include 18% GST, unlike others.

//                                         </p>
//                                     </div>


//                                 </div>

//                             </div>
//                         </div>

//                     </div>
//                 </div>
//             </div>

//         </div>


//     </section>
//     </div>
//   )
// }

// export default AboutFAQ

"use client";
import React, { useState } from "react";

const AboutFAQ = () => {
    


    const [openFAQ, setOpenFAQ] = useState(null);

    const toggleFAQ = (id) => {
        setOpenFAQ(openFAQ === id ? null : id
         )  
        
    };
    
    const faqs = [
        
        {
            id: 1,
            title: "How soon will I receive the voucher code once I make the payment?",
            content: "You will receive the voucher code immediately via email and SMS once you make the payment. The process is completely automated and takes only 30 seconds.",
        },
        {
            id: 2,
            title: "Within what timeframe do I need to book the slot after purchasing the voucher?",
            content: "This voucher is valid for 11 months. It is important to complete your exam within this 11-month period starting from the date of purchase.",
        },
        {
            id: 3,
            title: "Is this refundable?",
            content: "Sure, if you change your mind and plan not to appear for TOEFL Academic and return the unused voucher code to us, we will happily refund 70% of the amount within 6 months of purchase.",
        },
        {
            id: 4,
            title: "Can I book any available slot?",
            content: "Yes, you can book any available slot across India. You just need to book your slot 48 hours in advance.",
        },
        {
            id: 5,
            title: "Do I have to pay anything extra at PearsonToefl.com website at the time of slot booking?",
            content: "No, you don't have to pay anything extra on PearsonToefl.com website to book your slot. This prepaid TOEFL voucher is inclusive of GST and covers the full cost of TOEFL Academic.",
        },
        {
            id: 6,
            title: "Can you book my slot for me?",
            content: "Sure, if you are new to TOEFL and GRE and don't know how to book your slot, our team will happily help you to book your slot or we will book it for you.",
        },
        {
            id: 7,
            title: "Can you give me some more discount?",
            content: "Unfortunately, we cannot provide any further discount. There is no room for any additional discount since these are genuine vouchers and they include 18% GST, unlike others.",
        }
    ];
    
    const faq = faqs.slice(0,2)
    const faqv = faqs.slice(2)


  return (
    <div className="lg:flex-[1_1_500px] w-full flex-none py-10">

        <div className=" px-14">
        <div className="grid grid-cols-1 md:lg:grid-cols-2 ">
            <div className="pt-3 w-9/12">
                <h1>Got questions? Were here to help!</h1>
            </div>
            <div>
{faq.map((faq, index) => (
        <div className="px-1">
         <div
         key={faq.id}
         className={` mb-6 w-full overflow-hidden p-5 rounded-md transition-colors duration-300 ${openFAQ === faq.id ? "bg-black" : "bg-gray-100"}`}
     >
         <div
             className="flex cursor-pointer items-start justify-between "
             onClick={() => toggleFAQ(faq.id)}
         >
             <p className={`text-sm font-bold transition-colors duration-300 ${openFAQ === faq.id ? "text-white" : "text-black"}`}>{faq.title}</p>
             <div className=" relative ml-10 mt-1 flex h-5 w-5 items-center justify-center">
                 <div
                    className={`absolute h-5 w-0.5 transition-transform duration-300 ${openFAQ === faq.id ? "rotate-90 bg-white" : "bg-black"}`}
                 ></div>

                 <div className={`h-0.5 w-5  ${openFAQ === faq.id ? " bg-white" : "bg-black"}`}></div>
             </div>
         </div>
         {openFAQ === faq.id && (
             <div className=" w-full overflow-hidden mb-4 max-w-2xl lg:max-w-4xl">
                 <p className={`text-sm sm:text-base pt-3 transition-colors duration-300 ${openFAQ === faq.id ? "text-slate-100" : "text-black"}`}>{faq.content}</p>
             </div>
         )}
     </div>
     </div>
    ))}



            </div>
            </div>
        <div className="grid grid-cols-1 md:lg:grid-cols-2 ">
    {faqv.map((faq, index) => (
        <div className="px-1">
         <div
         key={faq.id}
         className={` mb-6 w-full overflow-hidden p-5 rounded-md transition-colors duration-300 ${openFAQ === faq.id ? "bg-gray-100" : "bg-gray-100"}`}
     >

         <div
             className="flex cursor-pointer items-start justify-between "
             onClick={() => toggleFAQ(faq.id)}
         >
             <p className={`text-sm font-bold transition-colors duration-300 ${openFAQ === faq.id ? "text-white" : "text-black"}`}>{faq.title}</p>
             <div className=" relative ml-10 mt-1 flex h-5 w-5 items-center justify-center">
                 <div
                    className={`absolute h-5 w-0.5 transition-transform duration-300 ${openFAQ === faq.id ? "rotate-90 bg-white" : "bg-black"}`}
                 ></div>

                 <div className={`h-0.5 w-5  ${openFAQ === faq.id ? " bg-white" : "bg-black"}`}></div>
             </div>
         </div>
         {openFAQ === faq.id && (
             <div className=" w-full overflow-hidden mb-4 max-w-2xl lg:max-w-4xl">
                 <p className={`text-sm sm:text-base pt-3 transition-colors duration-300 ${openFAQ === faq.id ? "text-slate-100" : "text-black"}`}>{faq.content}</p>
             </div>
         )}
     </div>
     </div>
    ))}
</div>
</div>
</div>

  )

}

export default AboutFAQ;
