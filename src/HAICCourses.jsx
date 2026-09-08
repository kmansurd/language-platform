import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import PageNavBar from "./components/PageNavBar";

const courses = [
  {
    code: "LANG 1431",
    title: "Integrating AI for Presentation Success across Cultures",
    url: "https://cle.hkust.edu.hk/courses/lang1431",
  },
  {
    code: "LANG 1432",
    title: "Write Research Confidently with AI",
    url: "https://cle.hkust.edu.hk/courses/lang1432",
  },
  {
    code: "LANG 1433",
    title: "Professional Workplace Communication with AI",
    url: "https://cle.hkust.edu.hk/courses/lang1433",
  },
  {
    code: "LANG 1434",
    title: "AI-Orchestrated Speaking: Voice, Presence, and Impact",
    url: "https://cle.hkust.edu.hk/courses/lang1434",
  },
  {
    code: "LANG 1441",
    title: "Storytelling with AI for Chinese Workplace",
    url: "https://cle.hkust.edu.hk/courses/lang1441",
  },
];

export default function HAICCourses() {
  const navigate = useNavigate();
  const location = useLocation();
  const initialDirection =
    location.state?.direction === "down" ? "-100%" : "100%";
  const [exitDirection, setExitDirection] = useState("up");
  const otherCourseOptions = [
    { label: "English", path: "/english", cardClass: "from-blue-50 to-indigo-100 border-blue-200 text-blue-700" },
    { label: "Chinese", path: "/chinese", cardClass: "from-red-50 to-rose-100 border-rose-200 text-rose-700" },
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
      <PageNavBar
        onBack={() => {
          setExitDirection("down");
          setTimeout(() => {
            navigate("/", { state: { direction: "down" } });
          }, 300);
        }}
      />

      <main className="max-w-6xl mx-auto px-6 pt-4">
        <section className="py-10 text-center">
          <h2 className="mb-6 text-5xl font-semibold tracking-tight md:text-7xl">
            HAIC
          </h2>
          <p className="mx-auto max-w-5xl text-lg text-gray-600">
            You may choose to enroll in any of these 1-credit CLE courses to fulfil your HAIC (Human-AI Co-Creation and Data Literacy) credits, after completing the required 3-credit HAIC course (AISC1000).
          </p>
        </section>

        <section className="grid grid-cols-1 gap-8 md:grid-cols-2 pb-8">
          {courses.map((course) => (
            <a
              key={course.code}
              href={course.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gradient-to-b from-cyan-50 to-sky-100 border border-cyan-200 rounded-[32px] p-8 text-left shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >
              <h4 className="mb-3 text-3xl font-semibold">{course.code}</h4>
              <p className="mb-4 text-gray-700">{course.title}</p>
              <span className="text-cyan-700 font-medium">View Course Details</span>
            </a>
          ))}
        </section>

        <section className="text-center pb-20">
          <p className="mb-6 text-sm font-medium uppercase tracking-[0.2em] text-gray-500">
            See other courses you can take
          </p>

          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
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
