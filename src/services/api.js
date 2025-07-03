const API_BASE_URL = "https://dummyjson.com";

export const fetchProducts = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/products`);
    if (!response.ok) {
      throw new Error("Ma'lumotlarni yuklashda xatolik yuz berdi");
    }
    const data = await response.json();
    return data.products; // DummyJSON возвращает объект с полем products
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

export const fetchProductById = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/products/${id}`);
    if (!response.ok) {
      throw new Error("Mahsulot ma'lumotini yuklashda xatolik");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching product:", error);
    throw error;
  }
};
