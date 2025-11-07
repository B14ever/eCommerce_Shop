'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { productApi } from '@/lib/api';
import { Product } from '@/types/product';
import ProductForm from '@/components/ProductForm';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export default function CreateProductPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (data: Partial<Product>) => {
    try {
      setIsLoading(true);
      const newProduct = await productApi.createProduct(data);
      toast.success(`Product "${data.title}" created successfully! (Mock API - redirecting to home)`);
      // DummyJSON is a mock API, the product ID doesn't actually exist
      // So we redirect to homepage instead of the product detail page
      setTimeout(() => {
        router.push('/');
      }, 1500);
    } catch (error) {
      toast.error('Failed to create product. Please try again.');
      setIsLoading(false);
    }
  };

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
        onSubmit={handleSubmit}
        submitLabel="Create Product"
        isLoading={isLoading}
      />
    </div>
  );
}
