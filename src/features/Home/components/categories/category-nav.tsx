'use client';

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import { useSearchParams } from 'next/navigation';
import  CategoryButton  from '@/features/Home/components/categories/category-button';

const categories = [
  'All',
  'Technology',
  'Fashion',
  'Home',
  'Sports',
  'Books',
  'Electronics',
  'Beauty',
  'Toys',
  'Furniture',
  'Automotive',
  'Health',
  'Garden',
  'Jewelry',
];

 const CategoryNav: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const searchParams = useSearchParams();
  const currentSearch = searchParams.get('search')?.toLowerCase() || 'all';
const SHOW_CATEGORY = 10
  const showPrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const showNext = () => {
    if (currentIndex < categories.length - SHOW_CATEGORY) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const visibleCategories = categories.slice(currentIndex, currentIndex + SHOW_CATEGORY);
  const isAtStart = currentIndex === 0;
  const isAtEnd = currentIndex >= categories.length - SHOW_CATEGORY;

  return (
    <div className="w-[25rem] px-2 md:px-0 md:w-full  sticky top-0 z-10">
      <div className="container mx-auto ">
        <div className="flex items-center justify-center space-x-4">
          <button
            onClick={showPrevious}
            disabled={isAtStart}
            className={`flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 ${
              isAtStart
                ? ' cursor-not-allowed opacity-50'
                : ' hover:shadow-md'
            }`}
            aria-label="Previous category"
          >
            <ChevronLeft className="h-6 w-6 bg-background" />
          </button>


          <div className="flex items-center space-x-6 overflow-hidden">
            {visibleCategories.map((category, idx) => (
              <div
                key={`${category}-${idx}`}

              >
                <CategoryButton
                  name={category}
                  active={currentSearch === category.toLowerCase()}
                />
              </div>
            ))}
          </div>


          <button
            onClick={showNext}
            disabled={isAtEnd}
            className={`flex items-center justify-center  rounded-full transition-all duration-300 ${
              isAtEnd
                ? ' cursor-not-allowed opacity-50'
                : 'bg-gray-100 hover:bg-gray-200 hover:shadow-md'
            }`}
            aria-label="Next category"
          >
            <ChevronRight className="h-6 w-6 bg-background" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoryNav;
