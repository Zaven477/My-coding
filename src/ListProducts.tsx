type Category = {
  id: number;
  name: string;
};

type Products = {
  id: number;
  name: string;
  categoryId: number;
};

type TCategoryProducts = {
  categories: Category[];
  products: Products[];
};

export const ListProducts = ({ categories, products }: TCategoryProducts) => {
  return (
    <ul>
      {categories.map((category) => (
        <li key={category.id}>
          {category.name}
          <ul>
            {products.map((product) => (
              <>
                {product.categoryId === category.id && <li key={product.id}>{product.name}</li>}
              </>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};
