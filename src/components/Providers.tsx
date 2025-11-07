'use client';

import { Provider } from 'react-redux';
import { store } from '@/store/store';
import { Toaster } from 'sonner';
import { ThemeProvider } from 'next-themes';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        {children}
        <Toaster 
          position="top-right"
          toastOptions={{
            style: {
              background: 'var(--card)',
              color: 'var(--card-foreground)',
              border: '1px solid var(--border)',
              borderRadius: '0.75rem',
              padding: '1rem 1.25rem',
              fontSize: '0.875rem',
              boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
            },
            className: 'sonner-toast',
          }}
          theme="system"
        />
      </ThemeProvider>
    </Provider>
  );
}
