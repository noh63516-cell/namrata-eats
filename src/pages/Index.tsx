import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import CategorySection from '@/components/CategorySection';
import RecommendationSection from '@/components/RecommendationSection';
import RestaurantGrid from '@/components/RestaurantGrid';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <CategorySection />
        <RecommendationSection />
        <RestaurantGrid />
        
        {/* Footer */}
        <footer className="border-t py-12 mt-12">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="col-span-2 md:col-span-1">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl">🍽️</span>
                  <span className="text-xl font-bold text-red-600">FOOD HUB</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Delicious food delivered to your doorstep. Order from the best restaurants near you.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Company</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><a href="#" className="hover:text-primary">About Us</a></li>
                  <li><a href="#" className="hover:text-primary">Careers</a></li>
                  <li><a href="#" className="hover:text-primary">Blog</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Support</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><a href="#" className="hover:text-primary">Help Center</a></li>
                  <li><a href="#" className="hover:text-primary">Contact Us</a></li>
                  <li><a href="#" className="hover:text-primary">FAQs</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4">Legal</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><a href="#" className="hover:text-primary">Terms of Service</a></li>
                  <li><a href="#" className="hover:text-primary">Privacy Policy</a></li>
                  <li><a href="#" className="hover:text-primary">Cookie Policy</a></li>
                </ul>
              </div>
            </div>
            
            <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
              © 2026 FOOD HUB. All rights reserved.
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;
