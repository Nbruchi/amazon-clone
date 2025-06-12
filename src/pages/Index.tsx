import AmazonHeader from "@/components/shared/AmazonHeader";
import AmazonFooter from "@/components/shared/AmazonFooter";
import HeroBanner from "@/components/shared/HeroBanner";
import ProductGrid from "@/components/shared/ProductGrid";
import DealCarousel from "@/components/shared/DealCarousel";
import CategoryGrid from "@/components/shared/CategoryGrid";
import { CartProvider } from "@/contexts/CartContext";

const Index = () => {
    return (
        <CartProvider>
            <div className="min-h-screen bg-gray-300">
                <AmazonHeader />
                <main>
                    <HeroBanner />
                    <div className="max-w-7xl mx-auto px-4 py-6">
                        <DealCarousel />
                        <CategoryGrid />
                        <ProductGrid />
                    </div>
                </main>
                <AmazonFooter />
            </div>
        </CartProvider>
    );
};

export default Index;
