import { Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-food.jpg';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Delicious food spread"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-transparent" />
      </div>
      
      <div className="container relative py-20 md:py-32">
        <div className="max-w-2xl space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold text-primary-foreground leading-tight animate-fade-in">
            Delicious Food,
            <br />
            <span className="text-primary">Delivered Fast</span>
          </h1>
          
          <p className="text-lg text-primary-foreground/80 max-w-md animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Discover amazing restaurants near you and get your favorite meals delivered to your doorstep.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search for food or restaurants..."
                className="w-full h-14 pl-12 pr-4 rounded-xl bg-card text-card-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary shadow-elevated"
              />
            </div>
            <Button variant="hero" size="xl">
              Search
            </Button>
          </div>
          
          <div className="flex items-center gap-6 pt-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-secondary border-2 border-card flex items-center justify-center text-lg"
                >
                  {['👨‍🍳', '👩‍🍳', '🧑‍🍳', '👨‍🍳'][i - 1]}
                </div>
              ))}
            </div>
            <div className="text-primary-foreground/80">
              <span className="font-bold text-primary-foreground">1000+</span> restaurants near you
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
