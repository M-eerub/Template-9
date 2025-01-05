/* eslint-disable @next/next/no-html-link-for-pages */
import React from "react";

const FAQPage = () => {
  const faqs = [
    {
      question: "How we serve food?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt.",
    },
    {
      question: "How is our food quality?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt.",
    },
    {
      question: "How do we give home delivery?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt.",
    },
    {
      question: "How can we get in touch with you?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt.",
    },
    {
      question: "What will be delivered? And when?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt.",
    },
    {
      question: "Is this restaurant 24 hours open?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt.",
    },
  ];

  return (
    <div className="bg-gray-100">
        {/* Header Section */}
        <div
        className="relative bg-cover bg-center h-96 flex flex-col items-center justify-center"
        style={{
          backgroundImage: "url('/Header-bg.png')",
        }}
      >
        <h1 className="text-white text-3xl font-bold">FAQ PAGE</h1>
        <p className="text-white mt-2">
          <a href="/" className="text-gray-300 hover:underline">
            Home
          </a>{" "}
          <span className="text-orange-500">›</span>{" "}
          <span className="text-orange-500">FAQ</span>
        </p>
      </div>
      <div className="container mx-auto px-4 lg:px-8 py-8">
      <section className="container mx-auto p-6">
        <h2 className="text-2xl font-bold text-center mb-4">
          Questions Looks Here
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md border"
            >
              <details>
                <summary className="font-semibold cursor-pointer">
                  {faq.question}
                </summary>
                <p className="mt-2 text-gray-600">{faq.answer}</p>
              </details>
            </div>
          ))}
        </div>
      </section>
    </div>
    </div>
  );
};

export default FAQPage;
