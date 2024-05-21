import ProductItem from "./ProductItem";
import { productsData } from "../../productsData";
import "./Products.css";

function Products() {
  return (
    <div className="products">
      {productsData.map((product) => {
        return (
          <ProductItem
            key={product.id}
            image={product.image}
            title={product.title}
            price={product.price}
            desc={product.description}
          />
        );
      })}
    </div>
  );
}

export default Products;
