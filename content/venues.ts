export type Venue = {
  slug: string;
  title: string;
  location: string;
  capacityLabel: string;
  description: string;
};

// Демонстрационные локации и вместимость условные: заменить перед публикацией.
export const venues: readonly Venue[] = [
  { slug: "coastal-venue", title: "Площадка у моря", location: "Котор, Черногория", capacityLabel: "До 18 участников", description: "Зал для занятий и терраса" },
  { slug: "mountain-venue", title: "Площадка в горах", location: "Колашин, Черногория", capacityLabel: "До 30 участников", description: "Пространство для групп и прогулок" },
];
