import { useState, useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [showCounter, setShowCounter] = useState(false);

  const { dispatch } = useContext(GlobalContext);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        if (!response.ok) {
          throw new Error("Mahsulot topilmadi");
        }
        const data = await response.json();
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleBuyClick = () => {
    setShowCounter(true);
  };

  const increaseQuantity = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };


  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <div className="text-lg">Yuklanmoqda...</div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-bold mb-4">Mahsulot topilmadi</h1>
        <Link to="/" className="text-blue-600 hover:underline">
          ← Bosh sahifaga qaytish
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      {/* Orqaga qaytish */}
      <div className="mb-6">
        <Link to="/" className="text-blue-600 hover:underline text-lg">
          ← Orqaga
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Chap tomon - Rasmlar */}
        <div>
          <div className="bg-gray-100 rounded-lg p-8 mb-4">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-96 object-contain"
            />
          </div>
        </div>

        {/* O'ng tomon - Ma'lumotlar */}
        <div className="space-y-6">
          {/* Sarlavha */}
          <div>
            <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
            <p className="text-gray-600 capitalize">{product.category}</p>
            <div className="border-t pt-6">
              <h3 className="text-xl font-bold mb-3">Mahsulot haqida</h3>
              <p className="text-gray-700 leading-relaxed">
                {product.description}
              </p>
            </div>
          </div>

          {/* Narx */}
          <div className="border-b pb-4">
            <div className="text-4xl font-bold text-purple-600 mb-2">
              ${product.price}
            </div>
            {product.discountPercentage > 0 && (
              <div className="bg-red-100 text-red-600 px-3 py-1 rounded inline-block">
                -{product.discountPercentage.toFixed(0)}% chegirma
              </div>
            )}
          </div>

          {/* Reyting */}
          <div className="flex items-center gap-2">
            <span className="text-yellow-400 text-xl">⭐</span>
            <span className="text-lg">{product.rating}</span>
            <span className="text-gray-500">reyting</span>
          </div>

          {/* Mavjudlik */}
          <div className="flex items-center gap-2">
            <span className="text-green-600 font-medium">
              ✓ Mavjud: {product.stock} dona
            </span>
          </div>

          {/* Tugmalar */}
          <div className="space-y-3 pt-4">
            {showCounter ? (
              // Counter ko'rsatilganda
              <div className="space-y-3">
                {/* Counter */}
                <div className="flex items-center justify-center bg-zinc-100-100 rounded-lg p-4">
                  <button
                    onClick={decreaseQuantity}
                    className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center text-xl font-bold hover:bg-purple-900 border"
                    disabled={quantity <= 1}
                  >
                    -
                  </button>
                  <span className="mx-6 text-black text-2xl font-bold min-w-[50px] text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={increaseQuantity}
                    className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center text-xl font-bold hover:bg-purple-900 border"
                    disabled={quantity >= product.stock}
                  >
                    +
                  </button>
                </div>

                {/* Savatga qo'shish tugmasi */}
                <button
                  onClick={() => dispatch({ type: "ADD_PRODUCT" })}
                  className="w-full bg-purple-600 text-white py-4 rounded-lg text-lg font-medium hover:bg-purple-700"
                >
                  Savatga qo'shish (${(product.price * quantity).toFixed(2)})
                </button>
              </div>
            ) : (
              <button
                onClick={handleBuyClick}
                className="w-full bg-purple-600 text-white py-4 rounded-lg text-lg font-medium hover:bg-purple-700"
              >
                Sotib olish
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
