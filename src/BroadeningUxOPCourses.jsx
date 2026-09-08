import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import PageNavBar from "./components/PageNavBar";
import { broadeningCourses, uxopCourses } from "./data/advancedCommunicationCourses";

export default function BroadeningUxOPCourses() {
  const navigate = useNavigate();
  const location = useLocation();
  const initialDirection =
    location.state?.direction === "down" ? "-100%" : "100%";
  const [exitDirection, setExitDirection] = useState("up");
  const [activeSection, setActiveSection] = useState(null);
  const tabButtonCommonClass =
    "cursor-pointer select-none rounded-full border px-8 py-4 text-base font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg active:scale-[0.98] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-offset-2";

  const sections = [
    {
      key: "broadening",
      label: "Broadening (Humanities)",
      description:
        "You may choose to enroll in any of these 3 credit courses for your Broadening (Humanities) credits.",
      courses: broadeningCourses,
      cardClass:
        "block bg-gradient-to-b from-emerald-50 to-green-100 border border-green-200 rounded-[32px] p-8 text-left shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300",
      accent: "text-emerald-700",
      buttonClass:
        "bg-gradient-to-b from-emerald-50 to-green-100 border-green-200 text-emerald-700",
      tabClass: "border-green-200 bg-gradient-to-b from-emerald-50 to-green-100 text-emerald-700",
      activeTabClass: "border-green-300 bg-gradient-to-b from-green-200 to-emerald-200 text-emerald-900 shadow-lg",
    },
    {
      key: "uxop",
      label: "UxOP",
      description:
        "UxOP courses can be substituted for Broadening credits for admissions in 2026 or after.",
      courses: [uxopCourses.find((course) => course.code === "UTOP 2401")].filter(Boolean),
      cardClass:
        "block bg-gradient-to-b from-sky-50 to-blue-100 border border-blue-200 rounded-[32px] p-8 text-left shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300",
      accent: "text-blue-700",
      buttonClass:
        "bg-gradient-to-b from-sky-50 to-blue-100 border-blue-200 text-blue-700",
      tabClass: "border-blue-200 bg-gradient-to-b from-sky-50 to-blue-100 text-blue-700",
      activeTabClass: "border-blue-300 bg-gradient-to-b from-blue-200 to-sky-200 text-blue-900 shadow-lg",
    },
  ];

  const currentSection = sections.find((section) => section.key === activeSection);
  const otherCourseOptions = [
    { label: "English", path: "/english", cardClass: "from-blue-50 to-indigo-100 border-blue-200 text-blue-700" },
    { label: "Chinese", path: "/chinese", cardClass: "from-red-50 to-rose-100 border-rose-200 text-rose-700" },
    { label: "Other Languages", path: "/third-languages", cardClass: "from-emerald-50 to-green-100 border-green-200 text-emerald-700" },
    { label: "HAIC", path: "/haic", cardClass: "from-cyan-50 to-sky-100 border-cyan-200 text-cyan-700" },
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

      <main className="max-w-7xl mx-auto px-6 pt-4">
        <section className="py-10 text-center">
          <h2 className="mb-6 text-5xl font-semibold tracking-tight md:text-7xl">
            Broadening (Humanities) and UxOP
          </h2>
        </section>

        <section className="mb-10 flex flex-wrap justify-center gap-4">
          {sections.map((section) => {
            const isActive = activeSection === section.key;

            return (
              <div key={section.key} className="relative">
                {section.key === "broadening" && activeSection === null && (
                  <motion.span
                    className="pointer-events-none absolute right-full top-1/2 mr-3 hidden -translate-y-1/2 whitespace-nowrap rounded-full bg-white/95 px-3 py-1 text-sm font-semibold text-gray-600 shadow-sm ring-1 ring-gray-200 md:inline-flex"
                    animate={{ x: [0, 6, 0], opacity: [0.75, 1, 0.75] }}
                    transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
                  >
                    Click here 👉
                  </motion.span>
                )}
                <motion.button
                  type="button"
                  onClick={() => setActiveSection(section.key)}
                  animate={isActive ? { scale: 1 } : { scale: [1, 1.05, 1] }}
                  transition={
                    isActive
                      ? { duration: 0.2 }
                      : { duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: section.key === "broadening" ? 0 : 0.5 }
                  }
                  className={`${tabButtonCommonClass} ${
                    isActive ? section.activeTabClass : section.tabClass
                  }`}
                >
                  {section.label}
                </motion.button>
              </div>
            );
          })}
        </section>

        {currentSection && (
          <>
            <section className="mx-auto mb-8 max-w-4xl px-2">
              <p className="text-center text-base text-gray-500">
                {currentSection.description}
              </p>
            </section>

            <section className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {currentSection.courses.map((course) => (
                <a
                  key={course.code}
                  href={course.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={currentSection.cardClass}
                >
                  <h4 className="mb-3 text-3xl font-semibold">{course.code}</h4>
                  <p className="mb-4 text-gray-700">{course.title}</p>
                  <span className={`${currentSection.accent} font-medium`}>
                    View Course Details
                  </span>
                </a>
              ))}
            </section>

            <section className="pt-10 pb-20 text-center">
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
          </>
        )}
      </main>
    </motion.div>
  );
}
