import React, { useState } from "react";
import "./FAQ.css";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What products can I find at Urban Center?",
      answer:
        "Urban Center offers a wide range of groceries, snacks, packaged food, clothing, and daily essentials—all under one roof. It’s your one-stop shop like Vishal Mega Mart.",
    },
    {
      question: "Where is Urban Center located?",
      answer:
        "Urban Center is conveniently located in Patna with plans for more branches. You can visit us in-store or shop online soon!",
    },
    {
      question: "Does Urban Center offer discounts or festive offers?",
      answer:
        "Yes! Urban Center provides year-round offers including up to 50% off on snacks, groceries, and clothing during festive seasons. Stay updated by following us on Instagram or Facebook.",
    },
    {
      question: "Can I purchase grocery items in bulk at Urban Center?",
      answer:
        "Absolutely. We offer bulk purchasing for groceries and packaged goods at wholesale-like prices. Ideal for households, parties, and businesses.",
    },
    {
      question: "Is online shopping available at Urban Center?",
      answer:
        "Our online store is launching soon! You'll be able to browse, order, and receive delivery of all Urban Center essentials right from your home.",
    },
    {
      question: "What types of clothes does Urban Center sell?",
      answer:
        "Urban Center stocks casual wear, ethnic wear, kidswear, and seasonal collections for all genders—fashion for the whole family at affordable prices.",
    },
    {
      question: "Are there return or exchange policies?",
      answer:
        "Yes. Products can be returned or exchanged within 7 days of purchase with a valid receipt. Clothing items must have tags intact.",
    },
    {
      question: "Does Urban Center offer loyalty rewards?",
      answer:
        "We are launching our Urban Rewards Program soon, where frequent shoppers earn points and discounts. Stay tuned!",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h2 className="faq-title">Frequently Asked Questions (Urban Center)</h2>
      <div className="faq-list">
        {faqs.map((faq, index) => (
          <div key={index} className={`faq-item ${openIndex === index ? "open" : ""}`}>
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              {faq.question}
              <span className={`faq-icon ${openIndex === index ? "rotate" : ""}`}>
                {openIndex === index ? "−" : "+"}
              </span>
            </div>
            <div className="faq-answer-wrapper">
              <div className="faq-answer">{faq.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
