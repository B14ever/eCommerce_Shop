'use client';

import { useAppSelector } from '@/store/hooks';
import ProductCard from '@/components/ProductCard';
import { Heart } from 'lucide-react';

export default function FavoritesPage() {
  const favorites = useAppSelector((state) => state.favorites.items);

  return (
    <div className="container mx-auto px-4 pt-32 pb-8">
      <div className="mb-8">
        <h1 className="text-2xl md:text-4xl font-bold mb-2 flex items-center gap-2 md:gap-3">
          <Heart className="h-6 w-6 md:h-8 md:w-8" />
          Favorites
        </h1>
        <p className="text-sm md:text-base text-muted-foreground">
          {favorites.length} {favorites.length === 1 ? 'product' : 'products'} in your favorites
        </p>
      </div>

      {favorites.length === 0 ? (
        <div className="text-center py-12 md:py-16">
          <Heart className="h-12 w-12 md:h-16 md:w-16 mx-auto mb-4 text-muted-foreground" />
          <h2 className="text-xl md:text-2xl font-semibold mb-2">No favorites yet</h2>
          <p className="text-sm md:text-base text-muted-foreground mb-6 px-4">
            Start adding products to your favorites by clicking the heart icon
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {favorites.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
