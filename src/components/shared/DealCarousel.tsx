import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const deals = [
    {
        id: 1,
        title: "Lightning Deal",
        discount: "50% off",
        originalPrice: 199.99,
        salePrice: 99.99,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&h=200&fit=crop",
        timeLeft: "2h 15m",
        claimed: 45,
    },
    {
        id: 2,
        title: "Deal of the Day",
        discount: "30% off",
        originalPrice: 79.99,
        salePrice: 55.99,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&h=200&fit=crop",
        timeLeft: "1d 5h",
        claimed: 23,
    },
    {
        id: 3,
        title: "Flash Sale",
        discount: "40% off",
        originalPrice: 149.99,
        salePrice: 89.99,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200&h=200&fit=crop",
        timeLeft: "45m",
        claimed: 78,
    },
    {
        id: 4,
        title: "Limited Time",
        discount: "25% off",
        originalPrice: 299.99,
        salePrice: 224.99,
        image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=200&h=200&fit=crop",
        timeLeft: "3h 22m",
        claimed: 34,
    },
];

const DealCarousel = () => {
    return (
        <section className="mb-8">
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold">Today's Deals</h2>
                <Button variant="link" className="text-amazon-link">
                    See all deals
                </Button>
            </div>

            <Card className="p-6 bg-white border">
                <div className="flex items-center justify-between mb-4">
                    <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-full"
                    >
                        <ChevronLeft className="h-5 w-5" />
                    </Button>
                    <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-full"
                    >
                        <ChevronRight className="h-5 w-5" />
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {deals.map((deal) => (
                        <div key={deal.id} className="group cursor-pointer">
                            <div className="relative">
                                <img
                                    src={deal.image}
                                    alt={deal.title}
                                    className="w-full h-48 object-cover rounded-lg group-hover:scale-105 transition-transform"
                                />
                                <div className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 rounded text-sm font-bold">
                                    {deal.discount}
                                </div>
                            </div>
                            <div className="mt-3">
                                <div className="text-sm text-red-600 font-medium">
                                    {deal.title}
                                </div>
                                <div className="flex items-center space-x-2 mt-1">
                                    <span className="text-lg font-bold text-red-600">
                                        ${deal.salePrice}
                                    </span>
                                    <span className="text-sm text-gray-500 line-through">
                                        ${deal.originalPrice}
                                    </span>
                                </div>
                                <div className="text-sm text-gray-600 mt-1">
                                    {deal.claimed}% claimed • {deal.timeLeft}{" "}
                                    left
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                                    <div
                                        className="bg-amazon-orange h-2 rounded-full transition-all"
                                        style={{ width: `${deal.claimed}%` }}
                                    ></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Card>
        </section>
    );
};

export default DealCarousel;
