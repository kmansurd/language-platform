import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import PageNavBar from "./components/PageNavBar";

const tabs = [
  {
    key: "fyp",
    label: "Final Year Project (FYP) English",
    description:
      "You may choose a 7-week Pass/Fail course to strengthen your final year or capstone project communication.",
    courses: [
      {
        code: "LANG 4090",
        title: "Report Writing for Final Year Engineering Projects",
        url: "https://cle.hkust.edu.hk/courses/lang4090",
      },
      {
        code: "LANG 4091",
        title: "Presentation Skills for Final Year Projects",
        url: "https://cle.hkust.edu.hk/courses/lang4091",
      },
    ],
    cardClass:
      "block bg-gradient-to-b from-orange-50 to-amber-100 border border-amber-200 rounded-[32px] p-8 text-left shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300",
    accent: "text-amber-700",
    buttonClass:
      "bg-gradient-to-b from-orange-50 to-amber-100 border-amber-200 text-amber-700",
    tabClass: "border-amber-200 bg-gradient-to-b from-orange-50 to-amber-100 text-amber-700",
    activeTabClass: "border-amber-300 bg-gradient-to-b from-amber-200 to-orange-200 text-amber-900 shadow-lg",
  },
  {
    key: "putonghua",
    label: "Putonghua for Beginners",
    description:
      "Free electives for beginners. Check each course's language background requirements and exclusions before enrolling.",
    courses: [
      {
        code: "LANG 1101",
        title: "Pinyin for Non-Chinese Language Background Students",
        url: "https://cle.hkust.edu.hk/courses/lang1101",
      },
      {
        code: "LANG 1102",
        title: "Chinese Characters for Non-Chinese Language Background Students I",
        url: "https://cle.hkust.edu.hk/courses/lang1102",
      },
      {
        code: "LANG 1103",
        title: "Chinese Characters for Non-Chinese Language Background Students II",
        url: "https://cle.hkust.edu.hk/courses/lang1103",
      },
    ],
    cardClass:
      "block bg-gradient-to-b from-emerald-50 to-green-100 border border-green-200 rounded-[32px] p-8 text-left shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300",
    accent: "text-emerald-700",
    buttonClass:
      "bg-gradient-to-b from-emerald-50 to-green-100 border-green-200 text-emerald-700",
    tabClass: "border-green-200 bg-gradient-to-b from-emerald-50 to-green-100 text-emerald-700",
    activeTabClass: "border-green-300 bg-gradient-to-b from-green-200 to-emerald-200 text-emerald-900 shadow-lg",
  },
  {
    key: "cantonese",
    label: "Cantonese",
    description: "Cantonese courses for Chinese and non-Chinese language background students.",
    courses: [
      {
        code: "LANG 1133",
        title: "Cantonese for Chinese Language Background Students I",
        url: "https://cle.hkust.edu.hk/courses/lang1133",
      },
      {
        code: "LANG 1130",
        title: "Cantonese for Non-Chinese Language Background Students I",
        url: "https://cle.hkust.edu.hk/courses/lang1130",
      },
    ],
    cardClass:
      "block bg-gradient-to-b from-cyan-50 to-teal-100 border border-teal-200 rounded-[32px] p-8 text-left shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300",
    accent: "text-teal-700",
    tabClass: "border-teal-200 bg-gradient-to-b from-cyan-50 to-teal-100 text-teal-700",
    activeTabClass: "border-teal-300 bg-gradient-to-b from-teal-200 to-cyan-200 text-teal-900 shadow-lg",
  },
  {
    key: "japanese",
    label: "Japanese",
    description: "Japanese courses for beginners.",
    courses: [
      ["LANG 1210", "Japanese Language and Culture for Beginners I"],
      ["LANG 1211", "Communicative Japanese for Beginners I"],
      ["LANG 1212", "Japanese Vocabulary and Grammar Essentials I"],
      ["LANG 2200", "Japanese Language and Culture for Beginners II"],
      ["LANG 2201", "Communicative Japanese for Beginners II"],
      ["LANG 2202", "Japanese Vocabulary and Grammar Essentials II"],
    ].map(([code, title]) => ({
      code,
      title,
      url: `https://cle.hkust.edu.hk/courses/${code.replace(" ", "").toLowerCase()}`,
    })),
    cardClass:
      "block bg-gradient-to-b from-rose-50 to-pink-100 border border-pink-200 rounded-[32px] p-8 text-left shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300",
    accent: "text-pink-700",
    tabClass: "border-pink-200 bg-gradient-to-b from-rose-50 to-pink-100 text-pink-700",
    activeTabClass: "border-pink-300 bg-gradient-to-b from-pink-200 to-rose-200 text-pink-900 shadow-lg",
  },
  {
    key: "korean",
    label: "Korean",
    description: "Korean courses for beginners.",
    courses: [
      {
        code: "LANG 1230",
        title: "Korean Language and Culture for Beginners I",
        url: "https://cle.hkust.edu.hk/courses/lang1230",
      },
    ],
    cardClass:
      "block bg-gradient-to-b from-sky-50 to-blue-100 border border-blue-200 rounded-[32px] p-8 text-left shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300",
    accent: "text-blue-700",
    tabClass: "border-blue-200 bg-gradient-to-b from-sky-50 to-blue-100 text-blue-700",
    activeTabClass: "border-blue-300 bg-gradient-to-b from-blue-200 to-sky-200 text-blue-900 shadow-lg",
  },
  {
    key: "french",
    label: "French",
    description: "French courses for beginners.",
    courses: [
      ["LANG 1310", "French Language and Culture for Beginners I"],
      ["LANG 2310", "French Language and Culture for Beginners II"],
    ].map(([code, title]) => ({
      code,
      title,
      url: `https://cle.hkust.edu.hk/courses/${code.replace(" ", "").toLowerCase()}`,
    })),
    cardClass:
      "block bg-gradient-to-b from-violet-50 to-purple-100 border border-purple-200 rounded-[32px] p-8 text-left shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300",
    accent: "text-purple-700",
    tabClass: "border-purple-200 bg-gradient-to-b from-violet-50 to-purple-100 text-purple-700",
    activeTabClass: "border-purple-300 bg-gradient-to-b from-purple-200 to-violet-200 text-purple-900 shadow-lg",
  },
  {
    key: "spanish",
    label: "Spanish",
    description: "Spanish courses for beginners.",
    courses: [
      ["LANG 1330", "Spanish Language and Culture for Beginners I"],
      ["LANG 2330", "Spanish Language and Culture for Beginners II"],
    ].map(([code, title]) => ({
      code,
      title,
      url: `https://cle.hkust.edu.hk/courses/${code.replace(" ", "").toLowerCase()}`,
    })),
    cardClass:
      "block bg-gradient-to-b from-lime-50 to-yellow-100 border border-lime-200 rounded-[32px] p-8 text-left shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300",
    accent: "text-lime-700",
    tabClass: "border-lime-200 bg-gradient-to-b from-lime-50 to-yellow-100 text-lime-700",
    activeTabClass: "border-lime-300 bg-gradient-to-b from-yellow-200 to-lime-200 text-lime-900 shadow-lg",
  },
  {
    key: "advanced-communication",
    label: "Advanced Communication (English)",
    description:
      "If you choose to take an Advanced Communication (English) course as elective to fulfil your graduation requirement, you must have already completed your required English courses.",
    courses: [
      ["LANG 2063", "Writing for Workplace Success"],
      ["LANG 2064", "Speaking for Workplace Success"],
      ["LANG 2065", "Research Writing"],
      ["LANG 2066", "Dynamic Communication for STEAM Topics"],
      ["LANG 2067", "Digital Communication: Expressing Your Perspective in Digital Spaces"],
      ["LANG 2068", "Speaking with Impact"],
      ["LANG 2069", "Supercommunication Offline and On: The Art of Connecting"],
      ["LANG 2071", "From Proposal to Applause: Navigating the Academic Conference Journey"],
    ].map(([code, title]) => ({
      code,
      title,
      url: `https://cle.hkust.edu.hk/courses/${code.replace(" ", "").toLowerCase()}`,
    })),
    cardClass:
      "block bg-gradient-to-b from-fuchsia-50 to-pink-100 border border-fuchsia-200 rounded-[32px] p-8 text-left shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300",
    accent: "text-fuchsia-700",
    tabClass: "border-fuchsia-200 bg-gradient-to-b from-fuchsia-50 to-pink-100 text-fuchsia-700",
    activeTabClass: "border-fuchsia-300 bg-gradient-to-b from-pink-200 to-fuchsia-200 text-fuchsia-900 shadow-lg",
  },
  {
    key: "chinese-non-background",
    label: "Chinese for non-Chinese Language background",
    description:
      "These courses are for students who studied Chinese as a primary or first language (e.g. HKDSE Chinese, Gaokao Chinese, GSAT, or equivalent). If you choose to take a Chinese course as elective to fulfil your graduation requirement, you must have already completed your required Chinese course.",
    courses: [
      ["LANG 1511", "Below HSK 1 or equivalent"],
      ["LANG 1512", "HSK 1 or 100 hrs prior tuition"],
      ["LANG 1513", "HSK 2 or 150 hrs prior tuition"],
      ["LANG 1514", "HSK 3 or 300 hrs prior tuition"],
      ["LANG 1515", "HSK 4 or 500 hrs prior tuition"],
    ].map(([code, title]) => ({
      code,
      title,
      url: `https://cle.hkust.edu.hk/courses/${code.replace(" ", "").toLowerCase()}`,
    })),
    cardClass:
      "block bg-gradient-to-b from-red-50 to-rose-100 border border-red-200 rounded-[32px] p-8 text-left shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300",
    accent: "text-red-700",
    tabClass: "border-red-200 bg-gradient-to-b from-red-50 to-rose-100 text-red-700",
    activeTabClass: "border-red-300 bg-gradient-to-b from-rose-200 to-red-200 text-red-900 shadow-lg",
  },
  {
    key: "chinese-background",
    label: "Chinese for Chinese Language background",
    description:
      "These courses are for students who are learning Chinese as a foreign or second language (e.g. studied Chinese through HSK levels). If you choose to take a Chinese course as elective to fulfil your graduation requirement, you must have already completed your required Chinese course.",
    courses: [
      ["LANG 1421", "Chinese Communication in the Digital Era"],
      ["LANG 1422", "Chinese for Workplace Applications"],
      ["LANG 1423", "Chinese Communication in Global Context"],
      ["LANG 1424", "Chinese Writing in Cultural Contexts"],
      ["LANG 1425", "Chinese Communication in Interpersonal Relations"],
      ["LANG 1426", "Chinese Communication in Film and Literary Contexts"],
    ].map(([code, title]) => ({
      code,
      title,
      url: `https://cle.hkust.edu.hk/courses/${code.replace(" ", "").toLowerCase()}`,
    })),
    cardClass:
      "block bg-gradient-to-b from-slate-50 to-gray-200 border border-slate-300 rounded-[32px] p-8 text-left shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300",
    accent: "text-slate-700",
    tabClass: "border-slate-300 bg-gradient-to-b from-slate-50 to-gray-200 text-slate-700",
    activeTabClass: "border-slate-400 bg-gradient-to-b from-gray-300 to-slate-200 text-slate-900 shadow-lg",
  },
];

export default function FYPElectives() {
  const navigate = useNavigate();
  const location = useLocation();
  const initialDirection =
    location.state?.direction === "down" ? "-100%" : "100%";
  const [exitDirection, setExitDirection] = useState("up");
  const [activeTab, setActiveTab] = useState(null);
  const tabButtonCommonClass =
    "cursor-pointer select-none rounded-full border px-8 py-4 text-base font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg active:scale-[0.98] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-offset-2";
  const currentTab = tabs.find((tab) => tab.key === activeTab) ?? null;
  const otherCourseOptions = [
    { label: "English", path: "/english", cardClass: "from-blue-50 to-indigo-100 border-blue-200 text-blue-700" },
    { label: "Chinese", path: "/chinese", cardClass: "from-red-50 to-rose-100 border-rose-200 text-rose-700" },
    { label: "Other Languages", path: "/third-languages", cardClass: "from-emerald-50 to-green-100 border-green-200 text-emerald-700" },
    { label: "Broadening and UxOP", path: "/broadening", cardClass: "from-violet-50 to-purple-100 border-violet-200 text-violet-700" },
    { label: "HAIC", path: "/haic", cardClass: "from-cyan-50 to-sky-100 border-cyan-200 text-cyan-700" },
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
            Electives
          </h2>
        </section>

        <section className="mb-10 flex flex-wrap justify-center gap-4">
          {tabs.map((tab, index) => {
            const isActive = activeTab === tab.key;

            return (
              <div key={tab.key} className="relative">
                {index === 0 && activeTab === null && (
                  <motion.span
                    className="pointer-events-none absolute bottom-full left-1/2 mb-2 inline-flex -translate-x-1/2 whitespace-nowrap rounded-full bg-white/95 px-3 py-1 text-sm font-semibold text-gray-600 shadow-sm ring-1 ring-gray-200"
                    animate={{ y: [0, 6, 0], opacity: [0.75, 1, 0.75] }}
                    transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
                  >
                    Click here 👇
                  </motion.span>
                )}
                <motion.button
                  type="button"
                  onClick={() => setActiveTab(tab.key)}
                  animate={isActive ? { scale: 1 } : { scale: [1, 1.05, 1] }}
                  transition={
                    isActive
                      ? { duration: 0.2 }
                      : { duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 }
                  }
                  className={`${tabButtonCommonClass} ${
                    isActive ? tab.activeTabClass : tab.tabClass
                  }`}
                >
                  {tab.label}
                </motion.button>
              </div>
            );
          })}
        </section>

        {currentTab && (
          <>
            <section className="mx-auto mb-8 max-w-4xl px-2">
              <p className="text-center text-base text-gray-500">
                {currentTab.description}
              </p>
            </section>

            <section className="grid grid-cols-1 gap-8 md:grid-cols-2 pb-8">
              {currentTab.courses.map((course) => (
                <a
                  key={course.code}
                  href={course.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={currentTab.cardClass}
                >
                  <h4 className="mb-3 text-3xl font-semibold">{course.code}</h4>
                  <p className="mb-4 text-gray-700">{course.title}</p>
                  <span className={`${currentTab.accent} font-medium`}>
                    View Course Details
                  </span>
                </a>
              ))}
            </section>

            <section className="pb-20 text-center">
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
