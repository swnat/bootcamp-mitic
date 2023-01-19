import NewMenuItem from "./MenuItem";

const products = [
  {
    id: 1,
    name: "Cafe americano",
    price: 15000,
    quantity: 100,
  },
  {
    id: 2,
    name: "Mixto",
    price: 12000,
    quantity: 100,
  },
  {
    id: 3,
    name: "Cafe con leche",
    price: 10000,
    quantity: 100,
  },
  {
    id: 4,
    name: "Jugo de frutilla",
    price: 17000,
    quantity: 100,
  },
  {
    id: 5,
    name: "Agua",
    price: 5000,
    quantity: 100,
  },
  {
    id: 6,
    name: "Gaseosa",
    price: 5000,
    quantity: 100,
  },
];

const NewMenu = ({ onClickProduct }) => {
  return (
    <div className="angry-grid">
      {products.map((product) => (
        <NewMenuItem
          key={product.id}
          product={product}
          onClickProduct={onClickProduct}
        />
      ))}
    </div>
  );
};

export default NewMenu;
