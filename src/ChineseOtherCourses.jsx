import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import PageNavBar from "./components/PageNavBar";

const options = [
  {
    label: "English",
    path: "/english",
    cardClass: "from-blue-50 to-indigo-100 border-blue-200 text-blue-700",
  },
  {
    label: "Other Languages",
    path: "/third-languages",
    cardClass: "from-emerald-50 to-green-100 border-green-200 text-emerald-700",
  },
  {
    label: "Broadening and UxOP",
    path: "/broadening",
    cardClass: "from-violet-50 to-purple-100 border-violet-200 text-violet-700",
  },
  {
    label: "Electives",
    path: "/fyp",
    cardClass: "from-amber-50 to-orange-100 border-amber-200 text-amber-700",
  },
];

export default function ChineseOtherCourses() {
  const navigate = useNavigate();
  const location = useLocation();
  const initialDirection = location.state?.direction === "down" ? "-100%" : "100%";
  const previousPage = location.state?.previousPage || "/chinese/background/gcs";
  const [exitDirection, setExitDirection] = useState("up");

  return (
    <motion.div
      className="min-h-screen bg-white text-black"
      initial={{ y: initialDirection }}
      animate={{ y: 0 }}
      exit={{ y: exitDirection === "up" ? "-100%" : "100%" }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <PageNavBar onBack={() => {
        setExitDirection("down");
        setTimeout(() => navigate(previousPage, { state: { direction: "down" } }), 300);
      }} />

      <main className="max-w-6xl mx-auto px-6 pt-4">
        <section className="text-center py-16">
          <h2 className="text-5xl md:text-7xl font-semibold tracking-tight mb-6">
            See other courses you can take
          </h2>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-20 max-w-5xl mx-auto">
          {options.map((option) => (
            <button
              key={option.path}
              type="button"
              onClick={() => {
                setExitDirection("up");
                setTimeout(() => {
                  navigate(option.path, { state: { direction: "up" } });
                }, 300);
              }}
              className={`rounded-[28px] border bg-gradient-to-b ${option.cardClass} p-8 text-left text-xl font-semibold shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}
            >
              {option.label}
            </button>
          ))}
        </section>
      </main>
    </motion.div>
  );
}
