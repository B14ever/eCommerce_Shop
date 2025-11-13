'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { productApi } from '@/lib/api';
import { Product } from '@/types/product';
import ProductForm from '@/components/ProductForm';
import ErrorState from '@/components/ErrorState';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { LoaderOne } from '@/components/ui/loader';

export default function EditProductPage() {
  const params = useParams();
  const router = useRouter();
  
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const productId = params.id as string;

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const data = await productApi.getProductById(parseInt(productId));
        setProduct(data);
        setError(null);
      } catch (err) {
        setError('Failed to load product.');
        toast.error('Failed to load product');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId, router]);

  const handleSubmit = async (data: Partial<Product>) => {
    if (!product) return;

    try {
      setIsSubmitting(true);
      await productApi.updateProduct(product.id, data);
      toast.success('Product updated successfully!');
      router.push(`/product/${product.id}`);
    } catch (error) {
      toast.error('Failed to update product. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) {
    return <div className="fixed inset-0 z-50 flex items-center justify-center bg-background">
            <LoaderOne />
          </div>;
  }

  if (error || !product) {
    return <ErrorState message={error || 'Product not found'} onRetry={() => router.push('/')} />;
  }

  return (
    <div className="container mx-auto px-4 pt-32 pb-8 max-w-3xl">
      <Button 
        variant="ghost" 
        onClick={() => router.back()}
        className="mb-6"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back
      </Button>

      <ProductForm
        product={product}
        onSubmit={handleSubmit}
        submitLabel="Update Product"
        isLoading={isSubmitting}
      />
    </div>
  );
}
