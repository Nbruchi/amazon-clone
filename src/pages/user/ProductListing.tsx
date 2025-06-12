import AmazonHeader from "@/components/shared/AmazonHeader";
import AmazonFooter from "@/components/shared/AmazonFooter";
import { CartProvider } from "@/contexts/CartContext";

const ProductListing = () => {
    return (
        <CartProvider>
            <div className="min-h-screen bg-white">
                <AmazonHeader />
                <main className="max-w-7xl mx-auto px-4 py-6">
                    <div className="text-center py-20">
                        <h1 className="text-3xl font-bold text-amazon-text mb-4">
                            Search Results
                        </h1>
                        <p className="text-amazon-gray">
                            Product listing page coming soon...
                        </p>
                    </div>
                </main>
                <AmazonFooter />
            </div>
        </CartProvider>
    );
};

export default ProductListing;
