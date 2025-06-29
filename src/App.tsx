import { ListProducts } from "./ListProducts";

export const App = () => {
  const categories = [
    { id: 1, name: "Корнеплоды" },
    { id: 2, name: "Листовые" },
    { id: 3, name: "Плодовые" },
  ];

  const vegetables = [
    { id: 1, name: "Морковь", categoryId: 1 },
    { id: 2, name: "Свёкла", categoryId: 1 },
    { id: 3, name: "Шпинат", categoryId: 2 },
    { id: 4, name: "Капуста", categoryId: 2 },
    { id: 5, name: "Томат", categoryId: 3 },
    { id: 6, name: "Огурец", categoryId: 3 },
  ];

  return <ListProducts categories={categories} products={vegetables} />;
};


