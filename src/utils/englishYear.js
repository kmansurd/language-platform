const YEAR_KEY = "englishYear";

export function setEnglishYear(year) {
  sessionStorage.setItem(YEAR_KEY, year);
}

export function getEnglishYear() {
  return sessionStorage.getItem(YEAR_KEY) || "";
}

const STREAMING_CRITERIA_URLS = {
  "2023":
    "https://cle.hkust.edu.hk/sites/default/files/E-Comm%20Streaming%20Table_2024-25_CLE.pdf",
  "2024":
    "https://cle.hkust.edu.hk/sites/default/files/E-Comm%20Streaming%20Table_2024-25_CLE.pdf",
  "2025":
    "https://cle.hkust.edu.hk/sites/default/files/Pathway%202%20Streaming%20Criteria%202025-26.pdf",
  "2026":
    "https://cle.hkust.edu.hk/sites/default/files/E-Comm%20Streaming%20Table.pdf",
};

export function getEnglishYearFromPath(pathname = "") {
  const match = pathname.match(/^\/english\/(20\d{2})\//);
  return match?.[1] ?? "";
}

export function resolveEnglishYear(pathname = "") {
  const fromPath = getEnglishYearFromPath(pathname);
  if (fromPath) return fromPath;
  return getEnglishYear() || "2026";
}

export function getStreamingCriteriaUrl(year = resolveEnglishYear()) {
  return STREAMING_CRITERIA_URLS[year] ?? STREAMING_CRITERIA_URLS["2026"];
}

export function getPathwayOrigin() {
  return sessionStorage.getItem("pathwayOrigin") || "";
}

export function isYear2026() {
  return getEnglishYear() === "2026";
}

export function isPathway1_2026() {
  return isYear2026() && getPathwayOrigin() === "pathway1";
}

export function isPathway2_2026() {
  return isYear2026() && getPathwayOrigin() === "pathway2";
}

export function getOSTCourse(year = getEnglishYear()) {
  if (year === "2024" || year === "2025") {
    return {
      code: "LANG 3025",
      title: "Science Communication in English (Ocean Science)",
      url: "https://cle.hkust.edu.hk/courses/lang3025",
    };
  }

  return {
    code: "LANG 4010",
    title:
      "From Report to Presentation: Mastering Effective Communication in Environmental Impact Assessments",
    url: "https://cle.hkust.edu.hk/courses/lang4010",
  };
}

export function getISDCourse(year = getEnglishYear()) {
  if (year === "2023" || year === "2024") {
    return {
      code: "LANG 4032",
      title: "Technical Communication II for IEDA and ISDN",
      url: "https://cle.hkust.edu.hk/courses/lang4032",
    };
  }

  return {
    code: "LANG 4036",
    title: "Technical Communication for Technology Projects",
    url: "https://cle.hkust.edu.hk/courses/lang4036",
  };
}

export function getRequiredCourseHeader() {
  if (isYear2026()) {
    return {
      title: "Required course",
      subtitle: "You are pre-enrolled into this course.",
    };
  }

  return null;
}
