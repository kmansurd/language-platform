import { useNavigate } from "react-router-dom";

const defaultCourseOptions = [
  {
    label: "Chinese",
    path: "/chinese",
    cardClass: "from-red-50 to-rose-100 border-rose-200 text-rose-700",
  },
  {
    label: "Other Languages",
    path: "/third-languages",
    cardClass: "from-emerald-50 to-green-100 border-green-200 text-emerald-700",
  },
  {
    label: "Broadening & UxOP",
    path: "/broadening",
    cardClass: "from-violet-50 to-purple-100 border-violet-200 text-violet-700",
  },
  {
    label: "Electives",
    path: "/fyp",
    cardClass: "from-amber-50 to-orange-100 border-amber-200 text-amber-700",
  },
];

const advancedCommunicationCourseOptions = [
  {
    label: "Chinese",
    path: "/chinese",
    cardClass: "from-red-50 to-rose-100 border-rose-200 text-rose-700",
  },
  {
    label: "Other Languages",
    path: "/third-languages",
    cardClass: "from-emerald-50 to-green-100 border-green-200 text-emerald-700",
  },
  {
    label: "Broadening & UxOP",
    path: "/broadening",
    cardClass: "from-violet-50 to-purple-100 border-violet-200 text-violet-700",
  },
  {
    label: "Electives",
    path: "/fyp",
    cardClass: "from-amber-50 to-orange-100 border-amber-200 text-amber-700",
  },
];

export default function OtherCoursesSection({ variant = "default", hideHAIC = false }) {
  const navigate = useNavigate();
  const baseOptions =
    variant === "advancedCommunication"
      ? advancedCommunicationCourseOptions
      : defaultCourseOptions;
  const options = hideHAIC
    ? baseOptions.filter((option) => option.label !== "HAIC")
    : baseOptions;

  return (
    <section className="mt-16 border-t border-gray-200 pt-12 pb-20">
      <h3 className="mb-8 text-center text-2xl font-semibold text-gray-800">
        See other courses you can take
      </h3>

      <div
        className={`mx-auto grid max-w-5xl grid-cols-1 gap-4 md:grid-cols-2 ${
          variant === "advancedCommunication" ? "lg:grid-cols-5" : "lg:grid-cols-3"
        }`}
      >
        {options.map((option) => (
          <button
            key={option.path}
            type="button"
            onClick={() =>
              navigate(option.path, { state: { direction: "up" } })
            }
            className={`rounded-[24px] border bg-gradient-to-b p-6 text-left text-lg font-semibold shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${option.cardClass}`}
          >
            {option.label}
          </button>
        ))}
      </div>
    </section>
  );
}
