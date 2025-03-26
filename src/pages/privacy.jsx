import React, { useState } from 'react'
import Jumbotron from '../components/jumbotron'
import JoinUs from '../components/joinUs'
import Services from '../components/services'

const Privacy = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const items = [
        "Improving Your Experience",
        "Data Collection",
        "Data Usage",
        "Data Protection",
        "Your Rights"
    ];

    const content = [
        {
            title: "Improving Your Experience",
            description: "We use your data to enhance your experience by:",
            points: [
                "Customizing app content based on your preferences",
                "Offering relevant tips, notifications, and educational resources",
                "Simplifying navigation through intuitive interface"
            ]
        },
        {
            title: "Data Collection",
            description: "We collect the following types of information:",
            points: [
                "Personal information (name, contact details)",
                "Blood type and medical history",
                "Location data for matching donors"
            ]
        },
        {
            title: "Data Usage",
            description: "Your data is used to:",
            points: [
                "Match donors with recipients in need",
                "Send important notifications and updates",
                "Improve our services and user experience"
            ]
        },
        {
            title: "Data Protection",
            description: "We implement robust security measures:",
            points: [
                "End-to-end encryption for sensitive data",
                "Regular security audits and updates",
                "Secure data storage and transmission"
            ]
        },
        {
            title: "Your Rights",
            description: "You have the right to:",
            points: [
                "Access your personal data",
                "Request data correction or deletion",
                "Opt-out of marketing communications"
            ]
        }
    ];

    return (
        <div className="pt-16 sm:pt-20">
         <Jumbotron title='Privacy' subheader={['FAQ', 'What we do']} />
            <div className="w-full sm:w-5/6 mx-auto my-8 sm:my-10 lg:my-12">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center mb-8 sm:mb-10">
                    Privacy Policy
                </h1>
                
                <div className="flex flex-col lg:flex-row border rounded-lg overflow-hidden">
                    <div className="w-full lg:w-1/4 border-b lg:border-b-0 lg:border-r border-gray-200 bg-gray-50">
                        <ul className="flex lg:flex-col overflow-x-auto lg:overflow-x-visible p-4 lg:p-6">
                            {items.map((item, index) => (
                                <li
                                    key={index}
                                    className={`cursor-pointer whitespace-nowrap lg:whitespace-normal py-2 px-4 lg:px-0 transition duration-300 
                                    ${activeIndex === index 
                                        ? "text-red-500 border-b-2 lg:border-b-0 lg:border-l-2 border-red-500" 
                                        : "text-gray-600 hover:text-red-500"}`}
                                    onClick={() => setActiveIndex(index)}
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex-1 p-6 lg:p-8">
                        <div className="space-y-8">
                            <div>
                                <h3 className="font-semibold text-xl sm:text-2xl mb-4">
                                    {content[activeIndex].title}
                                </h3>
                                <p className="text-gray-600 text-sm sm:text-base mb-4">
                                    {content[activeIndex].description}
                                </p>
                                <ul className="text-gray-600 text-sm sm:text-base space-y-3">
                                    {content[activeIndex].points.map((point, index) => (
                                        <li key={index} className="flex items-start">
                                            <span className="text-red-500 mr-2">•</span>
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Privacy