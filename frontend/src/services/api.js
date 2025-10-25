// src/services/api.js

// 🌐 Automatically use the correct backend URL
const API_BASE =
  process.env.NODE_ENV === "production"
    ? "https://ecommerce-mern-g020.onrender.com" // 🟢 Replace with your Render backend URL
    : "http://localhost:5000"; // 🧑‍💻 Local development backend

// ✅ Function to get products from backend API
export const getProducts = async () => {
  try {
    const response = await fetch(`${API_BASE}/api/products`);

    if (!response.ok) {
      throw new Error(`Failed to fetch products. Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("❌ Error fetching products:", error);
    throw error;
  }
};
