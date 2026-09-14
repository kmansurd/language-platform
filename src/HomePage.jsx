import { motion } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";

export default function LanguageHomePage() {
  const navigate = useNavigate();
  const location = useLocation();

  const options = [
    {
      title: "English",
      subtitle: "Explore English language courses",
      cardClass: "from-blue-50 to-indigo-100 border-blue-200",
      path: "/english",
    },
    {
      title: "Chinese",
      subtitle: "Browse Chinese language offerings",
      cardClass: "from-red-50 to-rose-100 border-rose-200",
      path: "/chinese",
    },
    {
      title: "Other Languages",
      subtitle:
        "Discover Japanese, Cantonese, Spanish, French, and Korean course options",
      cardClass: "from-emerald-50 to-green-100 border-green-200",
      path: "/third-languages",
    },
    {
      title: "Broadening and UxOP",
      subtitle:
        "Browse Broadening (Humanities) and Undergraudate Experiential Opportunities (UxOP) course options",
      cardClass: "from-violet-50 to-purple-100 border-violet-200",
      path: "/broadening",
    },
    {
      title: "Electives",
      subtitle: "Browse elective options and language study choices",
      cardClass: "from-amber-50 to-orange-100 border-amber-200",
      path: "/fyp",
    },
  ];

  return (
    <motion.div
      className="min-h-screen bg-white text-black"
      initial={{ y: location.state?.direction === "down" ? "-100%" : 0 }}
      animate={{ y: 0 }}
      exit={{ y: "-100%" }}
      transition={{
        duration: 0.6,
        ease: "easeInOut",
      }}
    >
      <main className="max-w-7xl mx-auto px-6 pt-8">
        <section className="flex flex-col items-center justify-center py-24 text-center md:py-32">
          <h2 className="mb-6 text-5xl font-semibold tracking-tight md:text-7xl">
            What courses are you looking for?
          </h2>

          <p className="max-w-2xl text-xl text-gray-600">
            Browse language course options and discover your learning path.
          </p>
        </section>

        <section className="grid grid-cols-1 gap-8 pb-24 md:grid-cols-2 lg:grid-cols-3">
          {options.map((option) => (
            <button
              key={option.title}
              type="button"
              onClick={() => {
                navigate(option.path, { state: { direction: "up" } });
              }}
              className={`group rounded-[32px] border bg-gradient-to-b ${option.cardClass} p-10 text-left shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl`}
            >
              <h3 className="mb-3 text-3xl font-semibold">{option.title}</h3>

              <p className="mb-6 text-gray-700">{option.subtitle}</p>

              <span className="font-medium text-blue-600 group-hover:underline">
                View courses
              </span>
            </button>
          ))}
        </section>
      </main>
    </motion.div>
  );
}
