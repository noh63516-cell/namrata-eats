import { Star, Leaf, Flame, Plus } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MenuItem } from '@/types/food';
import { useCart } from '@/contexts/CartContext';
import { toast } from 'sonner';

interface MenuItemCardProps {
  item: MenuItem;
  restaurantId: string;
  restaurantName: string;
  index?: number;
}

const MenuItemCard = ({ item, restaurantId, restaurantName, index = 0 }: MenuItemCardProps) => {
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem(item, restaurantId, restaurantName);
    toast.success(`${item.name} added to cart!`, {
      description: `From ${restaurantName}`,
    });
  };

  return (
    <Card 
      className="group overflow-hidden border-0 animate-fade-in"
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      <div className="flex gap-4 p-4">
        <div className="flex-1 space-y-2">
          <div className="flex items-start gap-2">
            <h3 className="font-semibold text-lg line-clamp-1">{item.name}</h3>
            <div className="flex gap-1 shrink-0">
              {item.isPopular && (
                <Badge variant="default" className="text-xs">
                  Popular
                </Badge>
              )}
            </div>
          </div>
          
          <p className="text-sm text-muted-foreground line-clamp-2">
            {item.description}
          </p>
          
          <div className="flex items-center gap-2">
            {item.isVegetarian && (
              <Badge variant="success" className="text-xs">
                <Leaf className="h-3 w-3 mr-1" />
                Vegetarian
              </Badge>
            )}
            {item.isSpicy && (
              <Badge variant="warning" className="text-xs">
                <Flame className="h-3 w-3 mr-1" />
                Spicy
              </Badge>
            )}
            {item.rating && (
              <div className="flex items-center gap-1 text-sm">
                <Star className="h-3 w-3 fill-warning text-warning" />
                <span>{item.rating}</span>
              </div>
            )}
          </div>
          
          <div className="flex items-center justify-between pt-2">
            <span className="text-lg font-bold text-primary">
              ${item.price.toFixed(2)}
            </span>
            <Button 
              size="sm" 
              onClick={handleAddToCart}
              className="opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <Plus className="h-4 w-4 mr-1" />
              Add
            </Button>
          </div>
        </div>
        
        <div className="relative w-28 h-28 shrink-0 rounded-xl overflow-hidden">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <Button 
            size="icon" 
            className="absolute bottom-2 right-2 h-8 w-8 rounded-full shadow-elevated md:hidden"
            onClick={handleAddToCart}
          >
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default MenuItemCard;
