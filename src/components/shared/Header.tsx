import { useState } from "react";
import { Search, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCart } from "@/contexts/CartContext";
import logo from "@/assets/logo.svg";

interface HeaderProps {
    onCartClick: () => void;
}

const Header = ({ onCartClick }: HeaderProps) => {
    const [searchQuery, setSearchQuery] = useState("");
    const { items } = useCart();

    const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <header className="gradient-blue-purple shadow-lg sticky top-0 z-50">
            <div className="container mx-auto px-4 py-3">
                <div className="flex items-center justify-between gap-4">
                    {/* Logo */}
                    <div className="flex items-center">
                        <img src={logo} alt="logo" width={200} height={40} />
                    </div>

                    {/* Search Bar */}
                    <div className="flex-1 max-w-2xl">
                        <div className="relative">
                            <Input
                                type="text"
                                placeholder="Search Amazon Clone..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-12 pr-4 py-3 rounded-lg border-none bg-white/95 backdrop-blur-sm focus:ring-2 focus:ring-amazon-yellow transition-all duration-300"
                            />
                            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 h-5 w-5" />
                        </div>
                    </div>

                    {/* Navigation & Cart */}
                    <div className="flex items-center gap-4">
                        <Button
                            variant="ghost"
                            className="text-white hover:bg-white/10 transition-colors"
                        >
                            Account
                        </Button>
                        <Button
                            variant="ghost"
                            className="text-white hover:bg-white/10 transition-colors"
                        >
                            Orders
                        </Button>
                        <Button
                            onClick={onCartClick}
                            className="relative gradient-yellow-orange hover-glow text-amazon-dark-blue font-semibold px-6 py-2 rounded-lg transition-all duration-300"
                        >
                            <ShoppingCart className="h-5 w-5 mr-2" />
                            Cart
                            {itemCount > 0 && (
                                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center animate-scale-in">
                                    {itemCount}
                                </span>
                            )}
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
