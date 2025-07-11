import { useParams, Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { FiArrowLeft, FiHeart, FiShoppingCart, FiShare2 } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import toast from "react-hot-toast";

function SingleProduct() {
  const { id } = useParams();
  const {
    data: product,
    isPending,
    error,
  } = useFetch(`https://dummyjson.com/products/${id}`);

  const { dispatch } = useContext(GlobalContext);

  const [isLiked, setIsLiked] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [cartItems, setCartItems] = useState(0);

  if (isPending) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-bold mb-4">Mahsulot topilmadi</h1>
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 transition-colors"
        >
          <FiArrowLeft /> Katalogga qaytish
        </Link>
      </div>
    );
  }

  const discountedPrice =
    product.price * (1 - (product.discountPercentage || 0) / 100);
  const images = product.images || [product.thumbnail];

  const increaseQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
      console.log("Soni oshirildi:", quantity + 1);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      console.log("Soni kamaytirildi:", quantity - 1);
    }
  };

  const handleAddToCart = () => {
    const newCartTotal = cartItems + quantity;
    setCartItems(newCartTotal);

    for (let i = 0; i < quantity; i++) {
      dispatch({
        type: "ADD_PRODUCT",
        payload: {
          id: product.id,
          title: product.title,
          price: product.price,
          thumbnail: product.thumbnail,
          category: product.category,
          discountPercentage: product.discountPercentage || 0,
          description: product.description,
          rating: product.rating,
          stock: product.stock,
          brand: product.brand,
        },
      });
    }

    console.log(
      "Savatchaga qo'shildi:",
      quantity,
      "Jami savatchada:",
      newCartTotal
    );
    toast.success(
      `Savatga qo'shildi: ${quantity} dona. Jami savatda: ${newCartTotal} dona.`
    );
    setQuantity(1);
  };

  const handleToggleFavorite = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className=" min-h-screen">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="mb-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 transition-colors"
          >
            <FiArrowLeft /> Katalogga qaytish
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-white rounded-2xl p-8 mb-4 aspect-square">
              <img
                src={images[selectedImage]}
                alt={product.title}
                className="w-full h-full object-contain"
              />
            </div>

            {images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto">
                {images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`flex-shrink-0 w-20 h-20 bg-white rounded-lg p-2 border-2 transition-colors ${
                      selectedImage === index
                        ? "border-purple-500"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.title} ${index + 1}`}
                      className="w-full h-full object-contain"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="bg-white rounded-2xl p-8">
            <div className="flex justify-between items-start mb-4">
              <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 pr-4">
                {product.title}
              </h1>
              <div className="flex gap-2">
                <button
                  onClick={handleToggleFavorite}
                  className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors"
                >
                  {isLiked ? (
                    <FaHeart className="text-red-500" />
                  ) : (
                    <FiHeart className="text-gray-600" />
                  )}
                </button>
                <button className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors">
                  <FiShare2 className="text-gray-600" />
                </button>
              </div>
            </div>

            <p className="text-purple-600 font-medium mb-4 capitalize">
              {product.category}
            </p>

            <div className="mb-6">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-3xl font-bold text-purple-600">
                  {Math.round(discountedPrice)} so'm
                </span>
                {product.discountPercentage > 0 && (
                  <span className="text-lg text-gray-400 line-through">
                    {product.price} so'm
                  </span>
                )}
              </div>
              {product.discountPercentage > 0 && (
                <div className="inline-block bg-red-100 text-red-600 px-3 py-1 rounded-lg text-sm font-medium">
                  Chegirma {Math.round(product.discountPercentage)}%
                </div>
              )}
            </div>

            <div className="flex items-center gap-2 mb-6">
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className={`text-lg ${
                      star <= Math.round(product.rating)
                        ? "text-yellow-400"
                        : "text-gray-300"
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>
              <span className="text-gray-600">
                {product.rating} ({product.reviews?.length || 0} ta sharh)
              </span>
            </div>

            <div className="mb-6">
              <p className="text-green-600 font-medium">
                ✓ Mavjud: {product.stock} dona
              </p>
            </div>

            {cartItems > 0 && (
              <div className="mb-4 bg-green-50 border border-green-200 rounded-xl p-3">
                <p className="text-green-700 text-sm font-medium text-center">
                  ✓ Savatchada: {cartItems} dona
                </p>
              </div>
            )}

            <div className="mb-6">
              <p className="text-gray-700 font-medium mb-3">Soni:</p>
              <div className="flex items-center gap-4">
                <button
                  onClick={decreaseQuantity}
                  disabled={quantity <= 1}
                  className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center justify-center transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  <span className="text-lg font-bold text-gray-600">−</span>
                </button>

                <span className="text-xl font-semibold text-gray-900 min-w-[3rem] text-center">
                  {quantity}
                </span>

                <button
                  onClick={increaseQuantity}
                  disabled={quantity >= product.stock}
                  className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-lg flex items-center justify-center transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  <span className="text-lg font-bold text-gray-600">+</span>
                </button>
              </div>
            </div>

            <div className="space-y-3 mb-8">
              <button
                onClick={handleAddToCart}
                className="w-full bg-purple-600 hover:bg-purple-700 text-white py-4 rounded-xl text-lg font-medium transition-colors flex items-center justify-center gap-2"
              >
                <FiShoppingCart />
                Savatga qo'shish ({quantity} dona) -{" "}
                {Math.round(discountedPrice * quantity)} so'm
              </button>
            </div>

            <div className="border-t pt-6">
              <h3 className="text-xl text-black font-bold mb-4">
                Mahsulot tavsifi
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {product.description}
              </p>
            </div>

            <div className="border-t pt-6 mt-6">
              <h3 className="text-xl text-black font-bold mb-4">
                Xususiyatlari
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Brend:</span>
                  <span className="font-medium text-black">
                    {product.brand || "Ko'rsatilmagan"}
                  </span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Kategoriya:</span>
                  <span className="font-medium capitalize text-black">
                    {product.category}
                  </span>
                </div>
                <div className="flex justify-between py-2 border-b border-gray-100">
                  <span className="text-gray-600">Reyting:</span>
                  <span className="font-medium text-black">
                    {product.rating}/5
                  </span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-gray-600">Mavjud:</span>
                  <span className="font-medium text-black">
                    {product.stock} dona
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
