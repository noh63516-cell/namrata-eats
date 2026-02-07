import { Link } from 'react-router-dom';
import { Search, ShoppingBag, MapPin, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';

const Header = () => {
  const { totalItems } = useCart();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl">🍽️</span>
          <span className="text-xl font-bold text-gradient">Namrata Restaurant</span>
        </Link>

        <div className="hidden md:flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4 text-primary" />
          <span>Delivering to:</span>
          <Button variant="ghost" size="sm" className="font-semibold text-foreground">
            123 Main Street
          </Button>
        </div>

        <nav className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <Search className="h-5 w-5" />
          </Button>
          <Link to="/cart">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingBag className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center font-semibold animate-scale-in">
                  {totalItems}
                </span>
              )}
            </Button>
          </Link>
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
