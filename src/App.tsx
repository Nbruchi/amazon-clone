
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ProductListing from "./pages/ProductListing";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Account from "./pages/Account";
import OrderHistory from "./pages/OrderHistory";
import Prime from "./pages/Prime";
import TodaysDeals from "./pages/TodaysDeals";
import GiftCards from "./pages/GiftCards";
import NotFound from "./pages/NotFound";

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
          <Route path="/gp/buy/spc/handlers/display.html" element={<Checkout />} />
          <Route path="/gp/css/homepage.html" element={<Account />} />
          <Route path="/gp/your-account/order-history" element={<OrderHistory />} />
          <Route path="/amazonprime" element={<Prime />} />
          <Route path="/gp/goldbox" element={<TodaysDeals />} />
          <Route path="/gift-cards" element={<GiftCards />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
