import { Link } from "react-router-dom";
import Product from "../components/Product";
import { useFetch } from "../hooks/useFetch";

function Home() {
  const { data: products, isPending } = useFetch(
    "https://dummyjson.com/product"
  );

  
    return (
      <section>
        <h1 className="text-3xl">Home</h1>
        {products &&
          products.products.map((p) => {
            return (
              <Link key={p.id} to={`singleProduct/${p.id}`}>
                <Product product={p} />
              </Link>
            );
          })}
      </section>
    );
}

export default Home;
