import React, { useState } from "react";
import Card from "./shared/Card";

const servicesData = [
    {
      id: 1,
      title: "BODY IMAGE",
      description: "Body image is how we perceive and feel about our physical appearance. It's common for people to have both positive and negative thoughts about their bodies. These thoughts can range from dissatisfaction with certain features to feeling fabulous about one's figure.",
    },
    {
      id: 2,
      title: "HEALTH ISSUES",
      description: "Health issues encompass a wide range of conditions, including Gastroesophageal reflux disease (GERD), diabetes risk, metabolic syndrome, Type 2 diabetes, asthma, cardiovascular disease, hypertension, and more. These conditions can have significant effects on one's well-being.",
    },
    {
      id: 3,
      title: "EATING DISORDERS",
      description: "Eating disorders, such as anorexia nervosa, bulimia nervosa, and binge-eating disorder, are serious conditions that affect both physical and emotional health. They can lead to irreversible and life-threatening problems like heart disease, bone loss, infertility, and kidney damage.",
    },
    {
      id: 4,
      title: "FAMILY",
      description: "Family is the bond that connects individuals through blood, marriage, or adoption. Maintaining strong family relationships requires continuous care and communication, and certain qualities are essential for fostering healthy family bonds.",
    },
    {
      id: 5,
      title: "CAREER",
      description: "Positive workplace relationships are vital for career success. Building these relationships can lead to increased productivity and job satisfaction. Developing emotional intelligence and getting to know your coworkers are key steps in building lasting professional connections.",
    },
    {
      id: 6,
      title: "ROMANCE",
      description: "Romantic relationships are a profound aspect of human life. Many seek the expression of love in a romantic partnership, which can bring deep fulfillment. While the need for human connection is innate, the ability to form healthy, loving relationships is learned.",
    },
    {
      id: 7,
      title: "STRESS",
      description: "Stress is a biological response that everyone experiences. It can result from routine challenges or sudden traumatic events. As we age, stress may arise from managing chronic illnesses, loss, caregiving, or life adjustments.",
    },
    {
      id: 8,
      title: "MOTIVATION",
      description: "Motivation is the driving force behind our actions and goal pursuit. It can fluctuate due to self-control and external factors. It's important to understand that motivation often follows action, not the other way around.",
    },
    {
      id: 9,
      title: "PHYSICAL WELLNESS",
      description: "Physical wellness refers to the body's ability to function well and engage in various activities without excessive fatigue. It encompasses exercise, nutrition, sleep, and emotional wellness. Maintaining emotional wellness involves practicing optimism, mindfulness, and reframing.",
    },
    {
      id: 10,
      title: "INTELLECTUAL WELLNESS",
      description: "Intellectual wellness involves nurturing your mental and cognitive abilities. Reading, exploring, and creating are three ways to support your intellectual health and creativity.",
    },
    {
      id: 11,
      title: "SPIRITUAL WELLNESS",
      description: "Spiritual wellness centers on finding meaning in life and embracing personal values. It's not limited to religion and can be fostered through activities that align with your purpose and values.",
    },
    {
      id: 12,
      title: "SOCIAL WELLNESS",
      description: "Social wellness involves effective communication, contributing to a community, and forging strong connections with others who share common experiences and goals.",
    },
    // Add more fixed services...
  ];
  

const categoriesData = [
  {
    category: "All",
    services: servicesData,
  },
  {
    category: "WEIGHT MANAGEMENT",
    services: [
        servicesData[0],
        servicesData[1],
        servicesData[2], // BODY IMAGE
      // Add more services related to WEIGHT MANAGEMENT...
    ],
  },
  {
    category: "SELF-ESTEEM",
    services: [
      servicesData[6], // Another Service Title
      servicesData[7],
      // Add more services related to WEIGHT MANAGEMENT...
    ],
  },
  {
    category: "RELATIONSHIP",
    services: [
      servicesData[3],
      servicesData[4],
      servicesData[5], // BODY IMAGE
      // Add more services related to WEIGHT MANAGEMENT...
    ],
  },
  {
    category: "WELLNESS",
    services: [
      servicesData[8], // Another Service Title
      servicesData[9],
      servicesData[10],
      // Add more services related to WEIGHT MANAGEMENT...
    ],
  },
  // Add more categories...
];

const About = () => {
  const [selectedCategory, setSelectedCategory] = useState(categoriesData[0]);

  return (
    <div name="about" className="w-full my-24">
      <div className="max-w-[1240px] mx-auto">
        <div className="text-center">
          <h2 className="text-5xl font-bold">SERVICES AT A GLANCE</h2>
          <p className="text-3xl py-6 text-gray-500">
            We all have a calling, a reason why we are here, and a purpose for being.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-3 px-2 text-center">
          {categoriesData.map((category, index) => (
            <div
              key={index}
              className={`border py-8 rounded-md shadow-sm hover:bg-blue-50 cursor-pointer ${
                selectedCategory === category ? "bg-blue-50" : ""
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              <p className="text-md font-bold text-indigo-600">{category.category}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-3 px-2 text-center">
          {selectedCategory.services.map((service) => (
            <Card key={service.id} title={service.title} description={service.description} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
