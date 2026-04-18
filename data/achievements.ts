export type Achievement = {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  description: string;
  link?: string;
  linkLabel?: string;
};

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: "elsevier-paper",
    title: "Co-Author — Published Research Paper",
    subtitle: "Elsevier Social Sciences & Humanities Open (SSHO)",
    date: "2024",
    description: `Co-authored **"Reimagining Personalized Learning: A Gamified, Culturally Responsive Approach to Multiple Intelligence Assessment through the Buddhimotta App"** — published in Social Sciences & Humanities Open, Elsevier.\n\nDOI: **10.1016/j.ssaho.2025.102296**`,
    link: "https://doi.org/10.1016/j.ssaho.2025.102296",
    linkLabel: "View Publication (DOI)",
  },
  {
    id: "book-ekushey",
    title: "Co-Writer — Technology in Education & Smart Bangladesh",
    subtitle: "Gourab Prokashon · Amar Ekushey Book Fair 2024",
    date: "2024",
    description: `Co-wrote a book showcased at the **Amar Ekushey Book Fair 2024**. Published by Gourab Prokashon.\n\nISBN: **9789849875499** — Available at Rokomari.`,
    link: "https://www.rokomari.com/book/search/result?pub_name=Gourab+Prokashon",
    linkLabel: "View on Rokomari",
  },
];
