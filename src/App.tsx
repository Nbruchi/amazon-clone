import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "@/pages/Index";
import ProductListing from "@/pages/user/ProductListing";
import ProductDetail from "@/pages/user/ProductDetail";
import Cart from "@/pages/user/Cart";
import Checkout from "@/pages/user/Checkout";
import Account from "@/pages/user/Account";
import OrderHistory from "@/pages/user/OrderHistory";
import Prime from "@/pages/user/Prime";
import TodaysDeals from "@/pages/user/TodaysDeals";
import GiftCards from "@/pages/user/GiftCards";
import NotFound from "@/pages/NotFound";
import SignIn from "@/pages/auth/SignIn";
import Register from "@/pages/auth/Register";
import ForgotPassword from "@/pages/auth/ForgotPassword";
import ConditionsOfUse from "./pages/privacy/ConditionsOfUse";
import PrivacyNotice from "./pages/privacy/PrivacyNotice";

const queryClient = new QueryClient();

const App = () => (
    <QueryClientProvider client={queryClient}>
        <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Index />} />
                    <Route path="/s" element={<ProductListing />} />
                    <Route path="/dp/:productId" element={<ProductDetail />} />
                    <Route path="/gp/cart/view.html" element={<Cart />} />
                    <Route
                        path="/gp/buy/spc/handlers/display.html"
                        element={<Checkout />}
                    />
                    <Route path="/gp/css/homepage.html" element={<Account />} />
                    <Route
                        path="/gp/your-account/order-history"
                        element={<OrderHistory />}
                    />
                    <Route path="/amazonprime" element={<Prime />} />
                    <Route path="/gp/goldbox" element={<TodaysDeals />} />
                    <Route path="/gift-cards" element={<GiftCards />} />

                    {/* Auth Routes */}
                    <Route path="/signin" element={<SignIn />} />
                    <Route path="/register" element={<Register />} />
                    <Route
                        path="/forgot-password"
                        element={<ForgotPassword />}
                    />

                    {/* Additional Amazon Routes */}
                    <Route path="/gp/registry/search" element={<NotFound />} />
                    <Route path="/gp/browse.html" element={<NotFound />} />
                    <Route path="/gp/bestsellers" element={<NotFound />} />
                    <Route path="/gp/new-releases" element={<NotFound />} />
                    <Route
                        path="/gp/movers-and-shakers"
                        element={<NotFound />}
                    />
                    <Route
                        path="/conditions-of-use"
                        element={<ConditionsOfUse />}
                    />
                    <Route path="/privacy-notice" element={<PrivacyNotice />} />

                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </TooltipProvider>
    </QueryClientProvider>
);

export default App;
