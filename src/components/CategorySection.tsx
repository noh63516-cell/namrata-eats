import { Badge } from '@/components/ui/badge';
import { categories } from '@/data/mockData';

const CategorySection = () => {
  return (
    <section className="py-12">
      <div className="container">
        <h2 className="text-2xl font-bold mb-6">What are you craving?</h2>
        
        <div className="flex flex-wrap gap-3">
          {categories.map((category, index) => (
            <Badge
              key={category.id}
              variant="category"
              className="px-4 py-2 text-base cursor-pointer hover:bg-primary hover:text-primary-foreground transition-all duration-200 animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
