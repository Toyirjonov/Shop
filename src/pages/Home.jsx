import ProductCard from "../components/ProductCard";
import { useFetch } from "../hooks/useFetch";
import { useState, useMemo, useEffect } from "react";

function Home() {
  const { data: products, isPending } = useFetch(
    "https://dummyjson.com/products?limit=100"
  );
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    window.updateSearchResults = (query) => {
      setSearchQuery(query);
    };

    return () => {
      delete window.updateSearchResults;
    };
  }, []);

  const filteredProducts = useMemo(() => {
    if (!products?.products || !searchQuery.trim()) {
      return products?.products || [];
    }

    const query = searchQuery.toLowerCase().trim();
    return products.products.filter(
      (product) =>
        product.title.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query) ||
        (product.brand && product.brand.toLowerCase().includes(query))
    );
  }, [products, searchQuery]);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

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

  return (
    <div className=" min-h-screen">
      <script
        dangerouslySetInnerHTML={{
          __html: `window.handleSearch = ${handleSearch.toString()}`,
        }}
      />

      <div className="container mx-auto px-4 py-8">
        <div className="mb-6 md:hidden">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="qidirish"
              className="w-full px-4 py-3 bg-white rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              {searchQuery ? "Hech narsa topilmadi" : "Mahsulotlar topilmadi"}
            </h3>
            <p className="text-gray-600">
              {searchQuery
                ? `Qidiruv so‘rovini o‘zgartirib ko‘ring yoki barcha mahsulotlarni ko‘ring`
                : "Hozirda mahsulotlar mavjud emas"}
            </p>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="mt-4 bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg transition-colors"
              >
                Barcha mahsulotlarni ko‘rsatish
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
