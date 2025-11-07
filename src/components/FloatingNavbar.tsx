'use client';

import React, { useState } from 'react';
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from 'framer-motion';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Heart, Moon, Sun, Plus, Menu, X } from 'lucide-react';
import { useAppSelector } from '@/store/hooks';
import { Badge } from '@/components/ui/badge';
import { useTheme } from 'next-themes';
import { useEffect, useState as useReactState } from 'react';

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: React.ElementType;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useReactState(false);
  const favorites = useAppSelector((state) => state.favorites.items);

  useEffect(() => {
    setMounted(true);
  }, []);

  useMotionValueEvent(scrollYProgress, 'change', (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === 'number') {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  const handleToggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const isDark = theme === 'dark';

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          'flex max-w-fit md:min-w-[70vw] lg:min-w-fit fixed z-[5000] top-10 inset-x-0 mx-auto px-4 md:px-10 py-3 md:py-5 rounded-full border border-black/.1 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] items-center justify-between md:justify-center space-x-2 md:space-x-4',
          'dark:border-white/[0.2] backdrop-blur-xl',
          className
        )}
        style={{
          backdropFilter: 'blur(16px) saturate(180%)',
          backgroundColor: mounted && isDark
            ? 'rgba(0, 0, 0, 0.75)' 
            : 'rgba(255, 255, 255, 0.75)',
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          className="text-lg md:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 whitespace-nowrap"
        >
          ShopModern
        </Link>

        {/* Nav Items - Desktop */}
        <div className="hidden md:flex items-center gap-2">
          {navItems.map((navItem: any, idx: number) => (
            <a
              key={`link=${idx}`}
              href={navItem.link}
              className={cn(
                'relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500 px-4 py-2 rounded-full transition-colors'
              )}
            >
              <span className="text-sm !cursor-pointer">{navItem.name}</span>
            </a>
          ))}
        </div>

        {/* Action Buttons - Desktop */}
        <div className="hidden md:flex items-center gap-2 border-l border-neutral-200 dark:border-neutral-800 pl-4">
          <Link href="/product/create">
            <button className="relative p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
              <Plus className="h-5 w-5 text-neutral-600 dark:text-neutral-300" />
            </button>
          </Link>

          <Link href="/favorites" className="relative">
            <button className="relative p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
              <Heart className="h-5 w-5 text-neutral-600 dark:text-neutral-300" />
              {favorites.length > 0 && (
                <Badge
                  variant="destructive"
                  className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs"
                >
                  {favorites.length}
                </Badge>
              )}
            </button>
          </Link>

          <button
            onClick={handleToggleTheme}
            className="relative p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            {mounted && isDark ? (
              <Sun className="h-5 w-5 text-neutral-600 dark:text-neutral-300" />
            ) : (
              <Moon className="h-5 w-5 text-neutral-600 dark:text-neutral-300" />
            )}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={handleToggleTheme}
            className="relative p-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            {mounted && isDark ? (
              <Sun className="h-4 w-4 text-neutral-600 dark:text-neutral-300" />
            ) : (
              <Moon className="h-4 w-4 text-neutral-600 dark:text-neutral-300" />
            )}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="relative p-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            {mobileMenuOpen ? (
              <X className="h-4 w-4 text-neutral-600 dark:text-neutral-300" />
            ) : (
              <Menu className="h-4 w-4 text-neutral-600 dark:text-neutral-300" />
            )}
          </button>
        </div>
      </motion.div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed z-[4999] top-24 left-4 right-4 mx-auto p-4 rounded-2xl border border-black/.1 shadow-lg dark:border-white/[0.2] backdrop-blur-xl md:hidden"
          style={{
            backdropFilter: 'blur(16px) saturate(180%)',
            backgroundColor: mounted && isDark
              ? 'rgba(0, 0, 0, 0.9)'
              : 'rgba(255, 255, 255, 0.9)',
          }}
        >
          <div className="flex flex-col space-y-3">
            {navItems.map((navItem: any, idx: number) => (
              <a
                key={`mobile-link=${idx}`}
                href={navItem.link}
                onClick={() => setMobileMenuOpen(false)}
                className="text-neutral-600 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-sm"
              >
                {navItem.name}
              </a>
            ))}
            <div className="border-t border-neutral-200 dark:border-neutral-800 pt-3 flex gap-2">
              <Link href="/product/create" className="flex-1">
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-colors text-sm"
                >
                  <Plus className="h-4 w-4" />
                  Create
                </button>
              </Link>
              <Link href="/favorites" className="flex-1">
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full relative flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-neutral-600 dark:text-neutral-300 transition-colors text-sm"
                >
                  <Heart className="h-4 w-4" />
                  Favorites
                  {favorites.length > 0 && (
                    <Badge
                      variant="destructive"
                      className="ml-1 h-5 w-5 flex items-center justify-center p-0 text-xs"
                    >
                      {favorites.length}
                    </Badge>
                  )}
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
