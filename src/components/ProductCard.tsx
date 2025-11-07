'use client';

import { Product } from '@/types/product';
import { Heart, Star } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { toggleFavorite } from '@/store/slices/favoritesSlice';
import { BackgroundGradient } from '@/components/ui/background-gradient';
import Link from 'next/link';
import Image from 'next/image';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const dispatch = useAppDispatch();
  const favorites = useAppSelector((state) => state.favorites.items);
  const isFavorite = favorites.some((fav) => fav.id === product.id);

  const handleToggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(toggleFavorite(product));
  };

  return (
    <BackgroundGradient className="rounded-[22px] p-4 sm:p-6 bg-white dark:bg-zinc-900 border border-gray-200 dark:border-gray-800">
      {/* Image */}
      <div className="relative w-full h-64 mb-4">
        <Image
          src={product.thumbnail}
          alt={product.title}
          fill
          className="object-contain rounded-lg"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <button
          onClick={handleToggleFavorite}
          className={`absolute top-2 right-2 p-2 rounded-full bg-white/80 dark:bg-zinc-800/80 backdrop-blur-sm transition-colors ${
            isFavorite ? 'text-red-500' : 'text-gray-400 hover:text-red-400'
          }`}
        >
          <Heart className={`h-5 w-5 ${isFavorite ? 'fill-current' : ''}`} />
        </button>
      </div>

      {/* Category Badge */}
      <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 mb-3">
        {product.category}
      </span>

      {/* Title */}
      <Link href={`/product/${product.id}`}>
        <h3 className="text-base sm:text-xl text-black dark:text-neutral-200 font-semibold mb-2 line-clamp-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
          {product.title}
        </h3>
      </Link>

      {/* Description */}
      <p className="text-sm text-neutral-600 dark:text-neutral-400 line-clamp-2 mb-3">
        {product.description}
      </p>

      {/* Rating */}
      <div className="flex items-center gap-1 mb-4">
        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
        <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
          {product.rating.toFixed(1)}
        </span>
        <span className="text-xs text-neutral-500 dark:text-neutral-500 ml-1">
          ({product.stock} in stock)
        </span>
      </div>

      {/* Buy Button */}
      <Link href={`/product/${product.id}`}>
        <button className="rounded-full pl-5 pr-2 py-2 text-white flex items-center space-x-2 bg-black mt-4 text-sm font-bold dark:bg-zinc-800 hover:bg-zinc-800 dark:hover:bg-zinc-700 transition-colors w-full justify-center">
          <span>View Details</span>
          <span className="bg-zinc-700 rounded-full text-xs px-3 py-1 text-white dark:bg-zinc-600">
            ${product.price.toFixed(2)}
          </span>
        </button>
      </Link>
    </BackgroundGradient>
  );
}
