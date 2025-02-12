"use client";
import React, { useState } from "react";
import { MinusIcon, PlusIcon } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData: FAQItem[] = [
    {
      question: "Why is Ocicat different ?",
      answer:
        "Ocicat project is not pump and dump. Its been been 2yrs and still growing stronger.",
    },
    {
      question: " Why the staking ,telegram App and all the new updates?",
      answer:
        "These features are rewards for long-term hold. They are the things that glue the community together.",
    },
    {
      question: "What benefit is included in my stake?",
      answer:
        "You receive reward from daily emissions and reward for DAO participation. The more points the more advantage. Your points qualifies you for future airdrop from partner projects and the ecosystem",
    },
    {
      question: "Can I stake multiple tokens?",
      answer:
        "Yes, you can stake multiple tokens. However, the rewards are calculated based on the total amount of OCICAT staked and your voting power collected.",
    },
    {
      question: "Are we expecting more from the community?",
      answer:
        "Yes . Ocicat Dao development is almost complete. We will bring up more development ideas for community to decide.",
    },
    {
      question: "Most meme coin projects have dumped seriously in that last few years, What's Ocicat secret?",
      answer:
        "Ocicat team are community of believers who suscribe to long-term dream. The community members too are holders who believe that Ocicat is undervalued."
    },
    {
      question: "What is the plan for Ocicat  NFT?",
      answer:
        "Ocicat NFT usecase will be revealed immediately after the mini App and Dao launch . We are just getting started ",
    },
  ];

  return (
    <section className="pt-4 md:py-16 bg-background px-4 lg:px-20 relative">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
          FAQs
        </h2>
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-[#0c0c0c] border border-gray-800 rounded-lg hover:border-red-600 transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
              >
                <p className="text-lg font-semibold text-white">
                  {faq.question}
                </p>
                <span className="text-red-600">
                  {activeIndex === index ? (
                    <MinusIcon className="w-6 h-6" />
                  ) : (
                    <PlusIcon className="w-6 h-6" />
                  )}
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  activeIndex === index ? "max-h-40" : "max-h-0"
                }`}
              >
                <p className="px-6 pb-6 text-white/70">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
