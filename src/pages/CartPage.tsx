import { Link } from 'react-router-dom';
import { ArrowLeft, Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Header from '@/components/Header';
import { useCart } from '@/contexts/CartContext';

const CartPage = () => {
  const { items, updateQuantity, removeItem, clearCart, totalPrice } = useCart();

  const deliveryFee = items.length > 0 ? 2.99 : 0;
  const serviceFee = items.length > 0 ? 1.99 : 0;
  const total = totalPrice + deliveryFee + serviceFee;

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container py-20">
          <div className="max-w-md mx-auto text-center space-y-6">
            <div className="w-24 h-24 mx-auto bg-secondary rounded-full flex items-center justify-center">
              <ShoppingBag className="h-12 w-12 text-muted-foreground" />
            </div>
            <h1 className="text-2xl font-bold">Your cart is empty</h1>
            <p className="text-muted-foreground">
              Looks like you haven't added any items to your cart yet.
            </p>
            <Link to="/">
              <Button variant="hero" size="lg">
                Start ordering
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container py-8">
        <div className="flex items-center gap-4 mb-8">
          <Link to="/">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <h1 className="text-2xl font-bold">Your cart</h1>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item, index) => (
              <Card 
                key={item.id} 
                className="border-0 animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <CardContent className="p-4">
                  <div className="flex gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 rounded-xl object-cover"
                    />
                    
                    <div className="flex-1 space-y-1">
                      <h3 className="font-semibold">{item.name}</h3>
                      <p className="text-sm text-muted-foreground">{item.restaurantName}</p>
                      <p className="font-bold text-primary">${item.price.toFixed(2)}</p>
                    </div>
                    
                    <div className="flex flex-col items-end justify-between">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-muted-foreground hover:text-destructive"
                        onClick={() => removeItem(item.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                      
                      <div className="flex items-center gap-2 bg-secondary rounded-full p-1">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-7 w-7 rounded-full"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="w-6 text-center font-semibold">{item.quantity}</span>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-7 w-7 rounded-full"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
            
            <Button 
              variant="ghost" 
              className="text-destructive hover:text-destructive"
              onClick={clearCart}
            >
              <Trash2 className="h-4 w-4 mr-2" />
              Clear cart
            </Button>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="border-0 sticky top-24">
              <CardContent className="p-6 space-y-4">
                <h2 className="text-lg font-bold">Order summary</h2>
                
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>${totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Delivery fee</span>
                    <span>${deliveryFee.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Service fee</span>
                    <span>${serviceFee.toFixed(2)}</span>
                  </div>
                </div>
                
                <Separator />
                
                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span className="text-primary">${total.toFixed(2)}</span>
                </div>
                
                <Button variant="hero" size="lg" className="w-full">
                  Proceed to checkout
                </Button>
                
                <p className="text-xs text-center text-muted-foreground">
                  By placing your order, you agree to our Terms of Service
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
