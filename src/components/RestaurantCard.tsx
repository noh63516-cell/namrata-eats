import { Link } from 'react-router-dom';
import { Star, Clock, Truck } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Restaurant } from '@/types/food';

interface RestaurantCardProps {
  restaurant: Restaurant;
  index?: number;
}

const RestaurantCard = ({ restaurant, index = 0 }: RestaurantCardProps) => {
  return (
    <Link to={`/restaurant/${restaurant.id}`}>
      <Card 
        className="group overflow-hidden cursor-pointer border-0 animate-fade-in"
        style={{ animationDelay: `${index * 0.1}s` }}
      >
        <div className="relative h-48 overflow-hidden">
          <img
            src={restaurant.image}
            alt={restaurant.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {!restaurant.isOpen && (
            <div className="absolute inset-0 bg-foreground/60 flex items-center justify-center">
              <Badge variant="secondary" className="text-sm">
                Currently Closed
              </Badge>
            </div>
          )}
          <div className="absolute top-3 left-3 flex gap-2">
            {restaurant.rating >= 4.7 && (
              <Badge variant="default" className="bg-primary">
                ⭐ Top Rated
              </Badge>
            )}
          </div>
        </div>
        
        <CardContent className="p-4 space-y-3">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-bold text-lg group-hover:text-primary transition-colors line-clamp-1">
              {restaurant.name}
            </h3>
            <div className="flex items-center gap-1 shrink-0">
              <Star className="h-4 w-4 fill-warning text-warning" />
              <span className="font-semibold">{restaurant.rating}</span>
              <span className="text-muted-foreground text-sm">({restaurant.reviewCount})</span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-1">
            {restaurant.cuisine.map((c) => (
              <Badge key={c} variant="secondary" className="text-xs">
                {c}
              </Badge>
            ))}
          </div>
          
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              <span>{restaurant.deliveryTime}</span>
            </div>
            <div className="flex items-center gap-1">
              <Truck className="h-4 w-4" />
              <span>${restaurant.deliveryFee.toFixed(2)}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default RestaurantCard;
