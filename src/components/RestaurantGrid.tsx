import { restaurants } from '@/data/mockData';
import RestaurantCard from './RestaurantCard';

const RestaurantGrid = () => {
  return (
    <section className="py-12">
      <div className="container">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Popular restaurants near you</h2>
          <a href="#" className="text-primary font-semibold hover:underline">
            View all
          </a>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {restaurants.map((restaurant, index) => (
            <RestaurantCard 
              key={restaurant.id} 
              restaurant={restaurant} 
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RestaurantGrid;
