import { NavLink } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-lg p-4 shadow hover:shadow-lg transition-shadow">
      <NavLink
        to={`/product/${product?.id}`}
        className="block text-lg font-medium text-gray-800 hover:text-purple-600 transition-colors text-center"
      >
        {product?.title}
      </NavLink>
    </div>
  );
}

export default ProductCard;
