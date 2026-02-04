import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Star, Clock, Truck, MapPin, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Header from '@/components/Header';
import MenuItemCard from '@/components/MenuItemCard';
import { restaurants } from '@/data/mockData';

const RestaurantPage = () => {
  const { id } = useParams();
  const restaurant = restaurants.find((r) => r.id === id);

  if (!restaurant) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Restaurant not found</h1>
          <Link to="/">
            <Button>Go back home</Button>
          </Link>
        </div>
      </div>
    );
  }

  const menuCategories = [...new Set(restaurant.menu.map((item) => item.category))];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Cover Image */}
      <div className="relative h-64 md:h-80">
        <img
          src={restaurant.coverImage}
          alt={restaurant.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent" />
        
        <div className="absolute top-4 left-4">
          <Link to="/">
            <Button variant="secondary" size="icon" className="rounded-full shadow-elevated">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
        </div>
        
        <div className="absolute top-4 right-4">
          <Button variant="secondary" size="icon" className="rounded-full shadow-elevated">
            <Heart className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Restaurant Info */}
      <div className="container -mt-20 relative z-10">
        <div className="bg-card rounded-2xl shadow-elevated p-6 space-y-4">
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <h1 className="text-2xl md:text-3xl font-bold">{restaurant.name}</h1>
                {!restaurant.isOpen && (
                  <Badge variant="secondary">Closed</Badge>
                )}
              </div>
              <p className="text-muted-foreground">{restaurant.description}</p>
            </div>
            
            <div className="flex items-center gap-1 bg-primary/10 px-3 py-2 rounded-xl shrink-0">
              <Star className="h-5 w-5 fill-primary text-primary" />
              <span className="font-bold text-lg">{restaurant.rating}</span>
              <span className="text-muted-foreground text-sm">({restaurant.reviewCount})</span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {restaurant.cuisine.map((c) => (
              <Badge key={c} variant="secondary">
                {c}
              </Badge>
            ))}
          </div>
          
          <div className="flex flex-wrap items-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-primary" />
              <span>{restaurant.deliveryTime}</span>
            </div>
            <div className="flex items-center gap-2">
              <Truck className="h-4 w-4 text-primary" />
              <span>${restaurant.deliveryFee.toFixed(2)} delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" />
              <span>{restaurant.address}</span>
            </div>
          </div>
          
          <div className="text-sm text-muted-foreground">
            Minimum order: ${restaurant.minOrder.toFixed(2)}
          </div>
        </div>
      </div>

      {/* Menu */}
      <div className="container py-8">
        <Tabs defaultValue={menuCategories[0]} className="space-y-6">
          <TabsList className="w-full justify-start overflow-x-auto flex-nowrap bg-transparent gap-2 p-0">
            {menuCategories.map((category) => (
              <TabsTrigger 
                key={category} 
                value={category}
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-full px-4 shrink-0"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {menuCategories.map((category) => (
            <TabsContent key={category} value={category} className="space-y-4 mt-6">
              {restaurant.menu
                .filter((item) => item.category === category)
                .map((item, index) => (
                  <MenuItemCard
                    key={item.id}
                    item={item}
                    restaurantId={restaurant.id}
                    restaurantName={restaurant.name}
                    index={index}
                  />
                ))}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default RestaurantPage;
