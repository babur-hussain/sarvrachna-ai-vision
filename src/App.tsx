import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LenisProvider } from "@/contexts/LenisContext";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import AppDevelopment from "./pages/AppDevelopment";
import WebsiteDevelopment from "./pages/WebsiteDevelopment";
import EcommerceStores from "./pages/EcommerceStores";
import QrMenusPos from "./pages/QrMenusPos";
import AiIntegrations from "./pages/AiIntegrations";
import GoogleReviewsBoost from "./pages/GoogleReviewsBoost";
import GoogleMaps360 from "./pages/GoogleMaps360";
import SeoRanking from "./pages/SeoRanking";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LenisProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/app-development" element={<AppDevelopment />} />
            <Route path="/website-development" element={<WebsiteDevelopment />} />
            <Route path="/e-commerce-stores" element={<EcommerceStores />} />
            <Route path="/qr-menus-and-pos" element={<QrMenusPos />} />
            <Route path="/ai-integrations" element={<AiIntegrations />} />
            <Route path="/google-reviews-boost" element={<GoogleReviewsBoost />} />
            <Route path="/google-maps-360" element={<GoogleMaps360 />} />
            <Route path="/seo-and-ranking" element={<SeoRanking />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LenisProvider>
  </QueryClientProvider>
);

export default App;
