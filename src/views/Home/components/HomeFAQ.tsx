import React, { useState } from 'react';
import { BiChevronDown } from 'react-icons/bi';

interface FAQItemProps {
    question: string;
    answer: string;
    isOpen: boolean;
    onClick: () => void;
}

const FAQItem = React.memo(({ question, answer, isOpen, onClick }: FAQItemProps) => (
    <div className="border-b border-gray-200">
        {isOpen ? (
            <button
                type="submit"
                onClick={onClick}
                aria-expanded="true"
                aria-controls={`faq-answer-${question.replace(/\s+/g, '-').toLowerCase()}`}
                className="w-full py-4 flex items-center justify-between text-left focus:outline-none transition-colors hover:bg-indigo-50 rounded-lg px-2"
            >
                <h3 className="text-lg font-medium text-gray-900">{question}</h3>
                <BiChevronDown className="w-6 h-6 text-primary transition-transform duration-300 rotate-180" />
            </button>
        ) : (
            <button
                type="submit"
                onClick={onClick}
                aria-expanded="false"
                aria-controls={`faq-answer-${question.replace(/\s+/g, '-').toLowerCase()}`}
                className="w-full py-4 flex items-center justify-between text-left focus:outline-none transition-colors hover:bg-indigo-50 rounded-lg px-2"
            >
                <h3 className="text-lg font-medium text-gray-900">{question}</h3>
                <BiChevronDown className="w-6 h-6 text-primary transition-transform duration-300" />
            </button>
        )}


        <div
            id={`faq-answer-${question.replace(/\s+/g, '-').toLowerCase()}`}
            className={`grid overflow-hidden transition-all duration-300 ease-in-out text-gray-600 ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
        >
            <div className="overflow-hidden">
                <p className="py-2 px-2 text-base">{answer}</p>
            </div>
        </div>
    </div>
));

const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqData = [
        {
            que: 'What is gogetwell.ai?',
            ans: 'gogetwell.ai is an AI-powered platform that helps healthcare facilitators streamline operations, manage patient leads, and build digital presence.',
        },
        {
            que: 'What is the AI Front Office for Healthcare Agents?',
            ans: 'It is an AI-driven platform that manages patient leads, appointments, and website creation, so healthcare agents can focus on care.',
        },
        {
            que: 'How does the AI Agent assist in my healthcare business?',
            ans: 'It acts like a 24/7 virtual assistant—scheduling consultations, answering queries, and automating tasks to save time and grow productivity.',
        },
        {
            que: 'Can I customize the website for my services?',
            ans: 'Yes! You can fully customize your website’s design, features, and content to match your brand and attract patients.',
        },
        {
            que: 'Is the platform secure and compliant?',
            ans: "Absolutely. We adhere to top security standards and healthcare regulations to protect patient data at all times.",
        },
        {
            que: 'How fast can I get started?',
            ans: 'You can launch your AI-powered front office in just minutes, with full support during onboarding.',
        },
        {
            que: 'What kind of support do you offer?',
            ans: 'We offer 24/7 customer support, along with tutorials, live demos, and onboarding assistance to ensure your success.',
        },
        {
            que: 'Can the platform help attract more patients?',
            ans: 'Yes! With SEO-optimized websites, lead management tools, and reputation-building features, you’ll attract and retain more patients easily.',
        },
    ];

    return (
        <section className="bg-gradient-to-b from-white via-indigo-50 to-purple-50 py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
                    <p className="text-lg text-gray-600 mb-4">
                        Everything you need to know about how our AI Front Office can transform your healthcare business.
                    </p>
                    <div className="h-1 w-20 bg-gradient-to-r from-primary to-purple-500 mx-auto rounded-full" />
                </div>

                {/* FAQ List */}
                <div className="bg-white shadow-xl rounded-3xl p-6 md:p-10 space-y-4">
                    {faqData.map((faq, index) => (
                        <FAQItem
                            key={index}
                            question={faq.que}
                            answer={faq.ans}
                            isOpen={openIndex === index}
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
