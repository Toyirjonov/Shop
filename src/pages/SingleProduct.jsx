import { data, useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

function SingleProduct() {
  const { id } = useParams();
  const { data: product, isPending } = useFetch(
    "https://dummyjson.com/product/" + id
  );
  if (isPending) {
    return <h1>Loading...</h1>;
  }
  return <>{product && <div>{product.title}</div>}</>;
}

export default SingleProduct;
