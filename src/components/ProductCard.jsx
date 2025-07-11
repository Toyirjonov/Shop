import { NavLink } from "react-router-dom";
import { FiHeart, FiShoppingCart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import { useState } from "react";

function ProductCard({ product }) {
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsLiked(!isLiked);
  };

  const discountedPrice =
    product.price * (1 - product.discountPercentage / 100);

  return (
    <div className="rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group">
      <NavLink to={`/singleProduct/${product?.id}`} className="block">
        <div className="relative bg-gray-50 aspect-square overflow-hidden">
          <img
            src={product?.thumbnail}
            alt={product?.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />

          <button
            onClick={toggleLike}
            className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-200 z-10"
          >
            {isLiked ? (
              <FaHeart className="text-red-500 text-sm" />
            ) : (
              <FiHeart className="text-gray-600 text-sm" />
            )}
          </button>

          {product?.discountPercentage && product.discountPercentage > 0 && (
            <div className="absolute top-3 left-3 bg-purple-600 text-white px-2 py-1 rounded-lg text-xs font-medium">
              -{Math.round(product.discountPercentage)}%
            </div>
          )}
        </div>

        <div className="p-4">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-lg font-bold text-purple-600">
              {Math.round(discountedPrice)} so'm
            </span>
            {product?.discountPercentage && product.discountPercentage > 0 && (
              <span className="text-sm text-gray-400 line-through">
                {product.price} so'm
              </span>
            )}
          </div>
          <h3 className="text-sm text-gray-700 font-medium line-clamp-2 mb-3 leading-relaxed">
            {product?.title}
          </h3>
          <p className="line-clamp-3">{product.description}</p>
          <div className="flex items-center gap-1 mb-3">
            <div className="flex items-center">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  className={`text-xs ${
                    star <= Math.round(product?.rating || 0)
                      ? "text-yellow-400"
                      : "text-gray-300"
                  }`}
                >
                  ★
                </span>
              ))}
            </div>
            <span className="text-xs text-gray-500">
              ({product?.rating || 0})
            </span>
          </div>

          <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2.5 px-4 rounded-xl text-sm font-medium transition-colors flex items-center justify-center gap-2">
            <FiShoppingCart className="text-sm" />
            Savatga qo'shish
          </button>
        </div>
      </NavLink>
    </div>
  );
}

export default ProductCard;
