import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import PageNavBar from "./components/PageNavBar";


export default function ChineseNonBackgroundCourses() {
  const navigate = useNavigate();
  const location = useLocation();

  const initialDirection =
    location.state?.direction === "down" ? "-100%" : "100%";

  const [exitDirection, setExitDirection] = useState("up");

  const levels = [
    { code: "LANG 1511", level: "Level 1", prerequisite: "Below HSK 1 or equivalent", url: "https://cle.hkust.edu.hk/courses/lang1511" },
    { code: "LANG 1512", level: "Level 2", prerequisite: "HSK 1 or 100 hrs prior tuition", url: "https://cle.hkust.edu.hk/courses/lang1512" },
    { code: "LANG 1513", level: "Level 3", prerequisite: "HSK 2 or 150 hrs prior tuition", url: "https://cle.hkust.edu.hk/courses/lang1513" },
    { code: "LANG 1514", level: "Level 4", prerequisite: "HSK 3 or 300 hrs prior tuition", url: "https://cle.hkust.edu.hk/courses/lang1514" },
    { code: "LANG 1515", level: "Level 5", prerequisite: "HSK 4 or 500 hrs prior tuition", url: "https://cle.hkust.edu.hk/courses/lang1515" },
  ];

  const navBtn = "inline-flex items-center px-6 py-3 rounded-full bg-gray-100 text-gray-800 font-medium shadow-sm hover:bg-gray-200 hover:shadow-md transition-all duration-300 pointer-events-auto";
  const otherCourseOptions = [
    { label: "English", path: "/english", cardClass: "from-blue-50 to-indigo-100 border-blue-200 text-blue-700" },
    { label: "Other Languages", path: "/third-languages", cardClass: "from-emerald-50 to-green-100 border-green-200 text-emerald-700" },
    { label: "Broadening and UxOP", path: "/broadening", cardClass: "from-violet-50 to-purple-100 border-violet-200 text-violet-700" },
    { label: "Electives", path: "/fyp", cardClass: "from-amber-50 to-orange-100 border-amber-200 text-amber-700" },
  ];

  return (
    <motion.div
      className="min-h-screen bg-white text-black"
      initial={{ y: initialDirection }}
      animate={{ y: 0 }}
      exit={{ y: exitDirection === "up" ? "-100%" : "100%" }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <PageNavBar onBack={() => { setExitDirection("down"); setTimeout(() => navigate("/chinese", { state: { direction: "down" } }), 300); }} />

      <main className="max-w-6xl mx-auto px-6 pt-4">
        <section className="text-center py-10">
          <h2 className="text-5xl md:text-7xl font-semibold tracking-tight mb-4">
            Non-Chinese Language Background
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            You must choose one of these courses to fulfil your 3 credit Chinese requirement. After completing this, you may also take another course from this list as electives to fulfil your graduation requirement. Students admitted in 2024 or 2025 may also choose additional courses from this list to substitute for CTDL or Experiencing credits.
          </p>
        </section>

        <section className="mb-4 px-2">
          <p className="text-gray-500 text-base">
            Select the course that matches your current proficiency or HSK (Hanyu Shuiping Kaoshi). If you are unsure of your level, please refer to the course selection guidlines.
          </p>
          <div className="mt-6 flex justify-center">
            <a
              href="https://cle.hkust.edu.hk/courses/common-core/chinese/selection-guideline"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-b from-orange-50 to-amber-100 border border-amber-200 text-amber-700 font-medium shadow-sm hover:shadow-md transition-all duration-300"
            >
              Read the Chinese course selection guideline
            </a>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
          {levels.map((lvl) => (
            <a
              key={lvl.code}
              href={lvl.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gradient-to-b from-orange-50 to-amber-100 border border-amber-200 rounded-[32px] p-8 text-left shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-3">
                <h4 className="text-3xl font-semibold">{lvl.code}</h4>
                <span className="text-sm font-semibold bg-amber-200 text-amber-800 rounded-full px-3 py-1 ml-3 mt-1 whitespace-nowrap">
                  {lvl.level}
                </span>
              </div>
              <p className="text-gray-600 text-sm font-medium mb-1 uppercase tracking-wide">
                Prerequisite
              </p>
              <p className="text-gray-800 text-base mb-5">{lvl.prerequisite}</p>
              <span className="text-amber-700 font-medium">View Course Details</span>
            </a>
          ))}
        </section>

        <section className="mt-12 pb-20">
          <h3 className="mb-8 text-center text-2xl font-semibold text-gray-800">
            See other courses you can take
          </h3>

          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {otherCourseOptions.map((option) => (
              <button
                key={option.path}
                type="button"
                onClick={() => {
                  setExitDirection("up");
                  setTimeout(() => {
                    navigate(option.path, { state: { direction: "up" } });
                  }, 300);
                }}
                className={`rounded-[24px] border bg-gradient-to-b p-6 text-left text-lg font-semibold shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${option.cardClass}`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </section>
      </main>
    </motion.div>
  );
}
