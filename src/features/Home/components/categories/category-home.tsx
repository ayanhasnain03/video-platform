"use client"
import dynamic from 'next/dynamic';

const CategoryNav = dynamic(() => import('@/features/Home/components/categories/category-nav'), {
  ssr: false,
});
export const CategoryHome = () => {
  return (
    <div><CategoryNav/></div>
  )
}


