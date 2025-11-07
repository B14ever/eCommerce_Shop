'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { productApi } from '@/lib/api';
import { Product } from '@/types/product';
import ProductCard from '@/components/ProductCard';
import LoadingSpinner from '@/components/LoadingSpinner';
import ErrorState from '@/components/ErrorState';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, ChevronLeft, ChevronRight } from 'lucide-react';
import { toast } from 'sonner';
import { HeroParallax } from '@/components/HeroParallax';
import AboutUs from '@/components/AboutUs';
import ContactUs from '@/components/ContactUs';

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [heroProducts, setHeroProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [categories, setCategories] = useState<string[]>([]);
  const [total, setTotal] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 12;

  const fetchProducts = useCallback(async (page: number = 1) => {
    try {
      setLoading(true);
      const currentSkip = (page - 1) * limit;

      let data;
      if (searchQuery) {
        data = await productApi.searchProducts(searchQuery, limit, currentSkip);
      } else if (selectedCategory !== 'all') {
        data = await productApi.getProductsByCategory(selectedCategory);
        // Manually paginate category results since API doesn't support it
        const startIndex = currentSkip;
        const endIndex = startIndex + limit;
        const paginatedProducts = data.products.slice(startIndex, endIndex);
        data = {
          products: paginatedProducts,
          total: data.products.length,
          skip: currentSkip,
          limit: limit,
        };
      } else {
        data = await productApi.getProducts(limit, currentSkip);
      }

      setProducts(data.products);
      setTotal(data.total);
      setError(null);
    } catch (err) {
      setError('Failed to load products. Please try again.');
      toast.error('Failed to load products');
    } finally {
      setLoading(false);
    }
  }, [searchQuery, selectedCategory, limit]);

  // Fetch categories on mount
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await productApi.getCategoryList();
        setCategories(data);
      } catch (err) {
        console.error('Failed to fetch categories');
      }
    };
    fetchCategories();
  }, []);

  // Fetch hero products for parallax
  useEffect(() => {
    const fetchHeroProducts = async () => {
      try {
        const data = await productApi.getProducts(15, 0);
        setHeroProducts(data.products);
      } catch (err) {
        console.error('Failed to fetch hero products');
      }
    };
    fetchHeroProducts();
  }, []);

  // Fetch products when page, search, or category changes
  useEffect(() => {
    setCurrentPage(1);
    fetchProducts(1);
  }, [searchQuery, selectedCategory, fetchProducts]);

  // Fetch products when page changes
  useEffect(() => {
    if (currentPage !== 1) {
      fetchProducts(currentPage);
    }
  }, [currentPage, fetchProducts]);

  const totalPages = Math.ceil(total / limit);

  const goToPage = (page: number) => {
    setCurrentPage(page);
    // Scroll to products section
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  // Transform products for HeroParallax format
  const heroParallaxProducts = heroProducts.map((product) => ({
    title: product.title,
    link: `/product/${product.id}`,
    thumbnail: product.thumbnail,
  }));

  return (
    <>
      {heroParallaxProducts.length > 0 && (
        <HeroParallax products={heroParallaxProducts} />
      )}
      <div id="products" className="container mx-auto px-4 py-16">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Products</h1>
          
          {/* Search Bar */}
          <div className="relative max-w-md mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Category Filter Buttons */}
          <div className="flex flex-wrap gap-2">
            <Button
              onClick={() => handleCategoryChange('all')}
              variant={selectedCategory === 'all' ? 'default' : 'outline'}
              size="sm"
              className="rounded-full"
            >
              All Products
            </Button>
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => handleCategoryChange(category)}
                variant={selectedCategory === category ? 'default' : 'outline'}
                size="sm"
                className="rounded-full capitalize"
              >
                {category.replace(/-/g, ' ')}
              </Button>
            ))}
          </div>
        </div>

      {loading ? (
        <LoadingSpinner message="Loading products..." />
      ) : error ? (
        <ErrorState message={error} onRetry={() => fetchProducts(1)} />
      ) : products.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No products found.</p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 mt-12">
              <Button
                variant="outline"
                size="icon"
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1 || loading}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>

              <div className="flex gap-2">
                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                  let pageNum;
                  if (totalPages <= 5) {
                    pageNum = i + 1;
                  } else if (currentPage <= 3) {
                    pageNum = i + 1;
                  } else if (currentPage >= totalPages - 2) {
                    pageNum = totalPages - 4 + i;
                  } else {
                    pageNum = currentPage - 2 + i;
                  }

                  return (
                    <Button
                      key={pageNum}
                      variant={currentPage === pageNum ? 'default' : 'outline'}
                      size="icon"
                      onClick={() => goToPage(pageNum)}
                      disabled={loading}
                    >
                      {pageNum}
                    </Button>
                  );
                })}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages || loading}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          )}
        </>
      )}
      </div>
      <AboutUs />
      <ContactUs />
    </>
  );
}
