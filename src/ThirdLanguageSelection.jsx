import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import PageNavBar from "./components/PageNavBar";


const languages = [
  {
    title: "Japanese",
    subtitle: "Beginner and upper-beginner level Japanese courses",
    cardClass: "from-pink-50 to-rose-100 border-rose-200",
    accent: "text-rose-700",
    path: "/third-languages/japanese",
  },
  {
    title: "Korean",
    subtitle: "Beginner level Korean language courses",
    cardClass: "from-sky-50 to-blue-100 border-blue-200",
    accent: "text-blue-700",
    path: "/third-languages/korean",
  },
  {
    title: "French",
    subtitle: "Beginner level French language courses",
    cardClass: "from-indigo-50 to-blue-100 border-indigo-200",
    accent: "text-indigo-700",
    path: "/third-languages/french",
  },
  {
    title: "Spanish",
    subtitle: "Beginner and upper-beginner level Spanish courses",
    cardClass: "from-yellow-50 to-amber-100 border-amber-200",
    accent: "text-amber-700",
    path: "/third-languages/spanish",
  },
  {
    title: "Cantonese",
    subtitle: "Cantonese courses for Chinese and non-Chinese language background students",
    cardClass: "from-emerald-50 to-green-100 border-green-200",
    accent: "text-emerald-700",
    path: "/third-languages/cantonese",
  },
];

export default function ThirdLanguageSelection() {
  const navigate = useNavigate();
  const location = useLocation();
  const initialDirection = location.state?.direction === "down" ? "-100%" : "100%";
  const [exitDirection, setExitDirection] = useState("up");

  return (
    <motion.div
      className="min-h-screen bg-white text-black"
      initial={{ y: initialDirection }}
      animate={{ y: 0 }}
      exit={{ y: exitDirection === "up" ? "-100%" : "100%" }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <PageNavBar onBack={() => { setExitDirection("down"); setTimeout(() => navigate("/", { state: { direction: "down" } }), 300); }} />

      <main className="max-w-7xl mx-auto px-6 pt-4">
        <section className="flex flex-col items-center justify-center text-center py-16 md:py-20">
          <h2 className="text-5xl md:text-7xl font-semibold tracking-tight mb-6">
            Other Languages
          </h2>
          <p className="max-w-3xl text-xl text-gray-600">
            Browse the options of our credit-bearing language electives.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-24">
          {languages.map((lang) => (
            <button
              key={lang.title}
              onClick={() => {
                setExitDirection("up");
                setTimeout(() => navigate(lang.path, { state: { direction: "up" } }), 300);
              }}
              className={`group bg-gradient-to-b ${lang.cardClass} border rounded-[32px] p-10 text-left shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300`}
            >
              <h3 className="text-3xl font-semibold mb-3">{lang.title}</h3>
              <p className="text-gray-700 mb-6">{lang.subtitle}</p>
              <span className={`${lang.accent} font-medium group-hover:underline`}>
                View courses
              </span>
            </button>
          ))}
        </section>
      </main>
    </motion.div>
  );
}
