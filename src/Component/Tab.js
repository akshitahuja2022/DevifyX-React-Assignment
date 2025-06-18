import React, { useState } from "react";
import { motion } from "framer-motion";
function Tab() {
  // Tab Data
  const tabData = [
    {
      id: 1,
      title: "Overview",
      message:
        "Welcome to your TabSwitch dashboard hub. Quickly glance through your recent activity, usage stats, and highlights. It's everything you need to stay informed at a glance.",
    },
    {
      id: 2,
      title: "Features",
      message:
        "Discover the core tools that make TabSwitch powerful and flexible. From dynamic content switching to smart UI behaviors, explore what’s possible. Each feature is designed to boost engagement and usability.",
    },

    {
      id: 3,
      title: "Settings",
      message:
        "Customize your preferences and configure the app behavior. Take control of your experience with full customization options. Adjust preferences, manage themes, and fine-tune app behavior effortlessly.",
    },

    {
      id: 4,
      title: "Support",
      message:
        "Facing issues or have questions? We’re here to help. Browse FAQs, read tutorials, or chat directly with our support team. Reliable assistance is just a click away.",
    },
    {
      id: 5,
      title: "Updates",
      message:
        "Keep up with the latest improvements and new features.Review recent patches, performance boosts, and changelogs here. We're always evolving to serve you better.",
    },
  ];

  const [activeTab, setActiveTab] = useState(tabData[0].id);

  return (
    <motion.div
      className="m-auto border-black border rounded-xl shadow-lg overflow-hidden  max-w-[90%] sm:max-w-[80%] md:max-w-[60%] lg:max-w-[50%]"
      initial={{ opacity: 0, x: -80 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeInOut", delay: 0.3 }}
    >
      <div className="border-b border-gray-400 mb-2 flex flex-wrap justify-center gap-1 ">
        {tabData.map((tab) => (
          // Multiple Tab button
          <motion.button
            className={` px-5 mx-5 my-4 sm:text-base focus:outline-none focus:ring-1 focus:ring-[#1e3a8a] rounded-xl cursor-pointer
                ${
                  activeTab === tab.id
                    ? "text-blue-900 font-semibold"
                    : "hover:text-lime-800"
                }`}
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.title}
          </motion.button>
        ))}
      </div>
      {/* Multiple Tab Information --- Name and Message */}
      <div className="mb-3">
        {tabData.map(
          (tab) =>
            activeTab === tab.id && (
              <div key={tab.id} className="p-3">
                <motion.h3
                  className="text-blue-900 sm:text-[1.1rem] font-semibold mb-2"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, ease: "easeInOut", delay: 0.3 }}
                >
                  {tab.title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
                >
                  {tab.message}
                </motion.p>
              </div>
            )
        )}
      </div>
    </motion.div>
  );
}

export default Tab;
