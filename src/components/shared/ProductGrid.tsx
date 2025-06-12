import { useState } from "react";
import ProductCard from "@/components/shared/ProductCard";

const products = [
    {
        id: 1,
        title: "Wireless Bluetooth Headphones",
        price: 79.99,
        originalPrice: 129.99,
        rating: 4.5,
        reviews: 1243,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
        category: "Electronics",
        prime: true,
    },
    {
        id: 2,
        title: "Smart Fitness Watch",
        price: 199.99,
        originalPrice: 249.99,
        rating: 4.8,
        reviews: 856,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
        category: "Electronics",
        prime: true,
    },
    {
        id: 3,
        title: "Organic Cotton T-Shirt",
        price: 24.99,
        originalPrice: 34.99,
        rating: 4.3,
        reviews: 567,
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
        category: "Fashion",
        prime: false,
    },
    {
        id: 4,
        title: "Professional Coffee Maker",
        price: 159.99,
        originalPrice: 199.99,
        rating: 4.7,
        reviews: 2134,
        image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400",
        category: "Home & Garden",
        prime: true,
    },
    {
        id: 5,
        title: "Gaming Mechanical Keyboard",
        price: 89.99,
        originalPrice: 119.99,
        rating: 4.6,
        reviews: 743,
        image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400",
        category: "Electronics",
        prime: true,
    },
    {
        id: 6,
        title: "Yoga Mat Premium",
        price: 39.99,
        originalPrice: 59.99,
        rating: 4.4,
        reviews: 892,
        image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400",
        category: "Sports",
        prime: false,
    },
];

const ProductGrid = () => {
    const [filter, setFilter] = useState("All");

    const categories = [
        "All",
        "Electronics",
        "Fashion",
        "Home & Garden",
        "Sports",
    ];

    const filteredProducts =
        filter === "All"
            ? products
            : products.filter((product) => product.category === filter);

    return (
        <section className="py-16 bg-amazon-light-gray">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-3xl font-bold text-gradient-cool">
                        Featured Products
                    </h2>

                    {/* Filter Buttons */}
                    <div className="flex gap-2 flex-wrap">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setFilter(category)}
                                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                                    filter === category
                                        ? "gradient-yellow-orange text-amazon-dark-blue shadow-lg"
                                        : "bg-white text-amazon-text-dark hover:bg-gray-100"
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredProducts.map((product, index) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            className="animate-fade-in"
                            style={{ animationDelay: `${index * 100}ms` }}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductGrid;
