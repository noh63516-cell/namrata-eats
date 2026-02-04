import { popularDishes } from '@/data/mockData';
import { Star, Plus } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { toast } from 'sonner';
import { restaurants } from '@/data/mockData';

const RecommendationSection = () => {
  const { addItem } = useCart();

  const handleAddToCart = (dish: typeof popularDishes[0]) => {
    const restaurant = restaurants.find(r => r.name === dish.restaurantName);
    if (restaurant) {
      addItem(dish, restaurant.id, restaurant.name);
      toast.success(`${dish.name} added to cart!`);
    }
  };

  return (
    <section className="py-12 bg-secondary/30">
      <div className="container">
        <div className="flex items-center gap-2 mb-6">
          <span className="text-2xl">✨</span>
          <h2 className="text-2xl font-bold">Recommended for you</h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {popularDishes.map((dish, index) => (
            <Card 
              key={dish.id} 
              className="group overflow-hidden border-0 cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-36 overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <Button 
                  size="icon" 
                  className="absolute bottom-2 right-2 h-8 w-8 rounded-full shadow-elevated opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={() => handleAddToCart(dish)}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              
              <CardContent className="p-3 space-y-1">
                <h3 className="font-semibold text-sm line-clamp-1">{dish.name}</h3>
                <p className="text-xs text-muted-foreground line-clamp-1">
                  {dish.restaurantName}
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-primary">${dish.price.toFixed(2)}</span>
                  {dish.rating && (
                    <div className="flex items-center gap-1 text-xs">
                      <Star className="h-3 w-3 fill-warning text-warning" />
                      <span>{dish.rating}</span>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecommendationSection;
