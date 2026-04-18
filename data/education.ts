import type { Experience } from "./experiences";

export const EDUCATION: Experience[] = [
  {
    id: "gazipur-masters",
    companyName: "University of Frontier Technology, Bangladesh",
    companyLogo: "https://ui-avatars.com/api/?name=UFT&background=1D4ED8&color=fff&size=200",
    isCurrentEmployer: true,
    positions: [
      {
        id: "gdu-msc",
        title: "M.Sc. in Educational Technology and Engineering",
        employmentPeriod: { start: "07.2025" },
        icon: "education",
        description: `- Pursuing postgraduate studies in Educational Technology and Engineering.`,
        skills: ["Educational Technology", "Research", "Engineering", "Digital Learning"],
        isExpanded: true,
      },
      {
        id: "gdu-bsc",
        title: "B.Sc. in Educational Technology and Engineering",
        employmentPeriod: { start: "01.2020", end: "01.2025" },
        icon: "education",
        description: `- Graduated with a CGPA of **3.58**.
- Co-authored a research paper titled **"Reimagining Personalized Learning: A Gamified, Culturally Responsive Approach to Multiple Intelligence Assessment through the Buddhimotta App"** — under review at Elsevier SSHO.
- Co-wrote **"Technology in Education & Smart Bangladesh"** (Gourab Prokashon), showcased at Amar Ekushey Book Fair 2024. ISBN: 9789849875499.`,
        skills: ["Educational Technology", "Research", "Academic Writing", "Mobile Learning", "CGPA 3.58"],
      },
    ],
  },
  {
    id: "khagrachari",
    companyName: "Khagrachari Cantonment Public School & College",
    companyLogo: "https://ui-avatars.com/api/?name=KCPSC&background=15803D&color=fff&size=200",
    positions: [
      {
        id: "hsc",
        title: "Higher Secondary School Certificate (HSC)",
        employmentPeriod: { start: "06.2017", end: "03.2019" },
        icon: "education",
        description: `- Passed with GPA **4.50** on 17th July, 2019.`,
        skills: ["GPA 4.50"],
      },
      {
        id: "ssc",
        title: "Secondary School Certificate (SSC)",
        employmentPeriod: { start: "01.2016", end: "03.2017" },
        icon: "education",
        description: `- Passed with GPA **4.91** on 4th May, 2017.`,
        skills: ["GPA 4.91"],
      },
    ],
  },
];
