import ProductItem from "./ProductItem";
import styles from "./Products.module.css";

const DUMMY_ITEMS = [
  {
    id: "1",
    price: 7,
    title: "Product 1",
    description:
      "The high quality of this Product 1 will last you a very long time.",
  },
  {
    id: "2",
    price: 8,
    title: "Product 2",
    description:
      "The high quality of this Product 2 will last you a very long time.",
  },
];

const Products = (props) => {
  return (
    <section className={styles.products}>
      <h2>Our shop offers the highest quality products</h2>
      <ul>
        {DUMMY_ITEMS.map((item) => (
          <ProductItem
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            description={item.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
