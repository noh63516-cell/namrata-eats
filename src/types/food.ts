export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  isPopular?: boolean;
  isVegetarian?: boolean;
  isSpicy?: boolean;
  rating?: number;
}

export interface Restaurant {
  id: string;
  name: string;
  description: string;
  image: string;
  coverImage: string;
  cuisine: string[];
  rating: number;
  reviewCount: number;
  deliveryTime: string;
  deliveryFee: number;
  minOrder: number;
  isOpen: boolean;
  address: string;
  menu: MenuItem[];
}

export interface CartItem extends MenuItem {
  quantity: number;
  restaurantId: string;
  restaurantName: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  image: string;
}
