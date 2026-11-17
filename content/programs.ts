export type Program = {
  slug: string;
  status: "upcoming" | "open" | "closed";
  order: number;
  title: string;
  dateLabel: string;
  location: string;
  description: string;
};

// Демонстрационные даты и локации условные: заменить перед публикацией.
export const programs: readonly Program[] = [
  { slug: "women-weekend", status: "open", order: 1, title: "Женский ретрит выходного дня", dateLabel: "14–16 мая", location: "Котор, Черногория", description: "Групповые встречи и время для себя" },
  { slug: "humane-pedagogy", status: "open", order: 2, title: "Выезд по гуманной педагогике", dateLabel: "4–6 июня", location: "Цетине, Черногория", description: "Практикум для родителей и педагогов" },
  { slug: "red-sea-yoga", status: "open", order: 3, title: "Йога у Красного моря", dateLabel: "10–17 октября", location: "Дахаб, Египет", description: "Утренние занятия и отдых у моря" },
];
