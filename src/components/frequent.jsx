import React, { useState } from 'react'
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';

const Freq = () => {
  return (
    <div>
        <h3 className='text-3xl font-semibold'>Frequently asked questions</h3>

        <div className='w-5/6 mx-auto text-left my-10 bg-[#FDDDDD] grid lg:grid-cols-2 gap-6  rounded-lg p-4 md:p-8'>
            <FAQAccordion />
            <div className='bg-[url(/fix.png)] bg-center bg-cover h-72 lg:h-5/6 mt-6'></div>

            </div>
    </div>
  )
}



export default Freq

const faqData = [

     {
        question: "How We Use Your Information?",
        answer: "We use your information to provide, improve, and personalize our services."
    },
    {
        question: "Data Retention and Security?",
        answer: "We retain data for as long as necessary and ensure its security with encryption."
    },
    {
        question: "Your Rights?",
        answer: "You have the right to access, update, or delete your personal data."
    },
    {
        question: "Third-Party Links?",
        answer: "Our website may contain links to third-party sites that have separate privacy policies."
    }
];

 function FAQAccordion() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index); // Toggle open/close
    };
    return (
        <div className=" grid  gap-12  mx-auto text-left col-span-1 text-sm md:text-lg  rounded-lg p-4">
            {faqData.map((faq, index) => (
                <div key={index} className={`border-gray-300 ${openIndex === index ? 'bg-[#F3BF99]' : ''}`}>

                    <div
                        className="w-full bg-[#FDDDDD] border-b cursor-pointer  border-black text-left p-4 flex justify-between items-center transition"
                        onClick={() => toggleFAQ(index)}
                    >
                        <span className="font-medium">{faq.question}</span>
                        <span className="text-xl">{openIndex === index ? <BsChevronUp /> : <BsChevronDown />}</span>
                    </div>
                    {openIndex === index && (
                        <div className="p-4  text-gray-700">{faq.answer}</div>
                    )}
                </div>
            ))}
        </div>
    );
}