import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { Link } from "react-router-dom";
import { FiTrash2, FiMinus, FiPlus } from "react-icons/fi";
import toast from "react-hot-toast";

function Basket() {
  const { basket, dispatch } = useContext(GlobalContext);

  const addProduct = (e, product) => {
    e.preventDefault();
    e.stopPropagation();

    dispatch({ type: "ADD_PRODUCT", payload: product });
    toast.success("Mahsulot qo'shildi");
  };

  const removeOneFromBasket = (productId) => {
    dispatch({ type: "REMOVE_PRODUCT", payload: productId });
    toast.success("Bitta mahsulot olib tashlandi");
  };

  const removeAllFromBasket = (productId) => {
    dispatch({ type: "REMOVE_ALL_PRODUCTS", payload: productId });
    toast.success("Barcha mahsulotlar olib tashlandi");
  };

  const getProductCount = (productId) => {
    return basket.filter((item) => item.id === productId).length;
  };

  const getUniqueProducts = () => {
    const uniqueProducts = [];
    const addedIds = new Set();

    basket.forEach((product) => {
      if (!addedIds.has(product.id)) {
        addedIds.add(product.id);
        uniqueProducts.push(product);
      }
    });

    return uniqueProducts;
  };

  if (basket.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8 min-h-screen">
        <div className="text-center py-20">
          <div className="text-6xl mb-4">🛒</div>
          <h2 className="text-2xl font-bold text-gray-700 mb-4">Savat bo'sh</h2>
          <p className="text-gray-600 mb-8">
            Hozircha savatda hech qanday mahsulot yo'q
          </p>
          <Link
            to="/"
            className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-xl font-medium transition-colors"
          >
            Xaridni boshlash
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 min-h-screen">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Savat</h1>
        <p className="text-gray-600">Jami {basket.length} ta mahsulot bor</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          {getUniqueProducts().map((product, index) => {
            const productCount = getProductCount(product.id);
            return (
              <div
                key={`${product.id}-${index}`}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
              >
                <div className="flex items-center gap-4">
                  <Link
                    to={`/singleProduct/${product.id}`}
                    className="flex-shrink-0"
                  >
                    <img
                      src={product.thumbnail}
                      alt={product.title}
                      className="w-20 h-20 object-cover rounded-xl bg-gray-100"
                    />
                  </Link>

                  <div className="flex-1 min-w-0">
                    <Link
                      to={`/singleProduct/${product.id}`}
                      className="text-lg font-medium text-gray-900 hover:text-purple-600 transition-colors block truncate"
                    >
                      {product.title}
                    </Link>
                    <p className="text-sm text-gray-500 capitalize mt-1">
                      {product.category}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-lg font-bold text-purple-600">
                        ${product.price}
                      </span>
                      {product.discountPercentage > 0 && (
                        <span className="text-sm text-gray-400 line-through">
                          ${product.price}
                        </span>
                      )}
                    </div>

                    <div className="mt-2">
                      <span className="text-sm text-gray-600">
                        Miqdori:{" "}
                        <span className="font-semibold text-purple-600">
                          {productCount} dona
                        </span>
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col items-end gap-2">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => removeOneFromBasket(product.id)}
                        className="w-8 h-8 bg-gray-50 hover:bg-gray-100 text-gray-600 rounded-lg flex items-center justify-center transition-colors"
                        title="Bitta olib tashlash"
                      >
                        <FiMinus className="text-sm" />
                      </button>

                      <span className="px-3 py-1 bg-gray-100 rounded-lg text-sm font-medium min-w-[3rem] text-center">
                        {productCount}
                      </span>

                      <button
                        onClick={(e) => addProduct(e, product)}
                        className="w-8 h-8 bg-purple-50 hover:bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center transition-colors"
                        title="Yana bitta qo'shish"
                      >
                        <FiPlus className="text-sm" />
                      </button>
                      <button
                        onClick={() => removeAllFromBasket(product.id)}
                        className="w-8 h-8 bg-red-50 hover:bg-red-100 text-red-600 rounded-lg flex items-center justify-center transition-colors"
                        title="Hammasini olib tashlash"
                      >
                        <FiTrash2 className="text-sm" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="lg:col-span-1">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 sticky top-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Buyurtma haqida ma'lumot
            </h3>

            <div className="space-y-4 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-600">Mahsulotlar:</span>
                <span className="font-medium">
                  $
                  {basket
                    .reduce((total, product) => total + (product.price || 0), 0)
                    .toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Yetkazib berish:</span>
                <span className="font-medium text-green-600">Bepul</span>
              </div>
              <div className="border-t pt-4">
                <div className="flex justify-between">
                  <span className="text-lg font-bold">Jami:</span>
                  <span className="text-lg font-bold text-purple-600">
                    $
                    {basket
                      .reduce(
                        (total, product) => total + (product.price || 0),
                        0
                      )
                      .toFixed(2)}
                  </span>
                </div>
              </div>
            </div>

            <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-4 rounded-xl font-medium transition-colors">
              Buyurtma berish
            </button>

            <Link
              to="/"
              className="block text-center text-purple-600 hover:text-purple-700 mt-4 transition-colors"
            >
              Xaridni davom ettirish
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Basket;
