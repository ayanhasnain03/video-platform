'use client';

import React, { useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

interface CategoryButtonProps {
  name: string;
  active?: boolean;
  onClick?: () => void;
}

const CategoryButton: React.FC<CategoryButtonProps> = ({
  name,
  active = false,
  onClick,
}) => {
  const router = useRouter();

  const handleClick = useCallback(() => {
    router.push(`/?search=${encodeURIComponent(name.toLowerCase())}`);
    onClick?.();
  }, [name, onClick, router]);

  return (
    <Button
    variant={"secondary"}
      onClick={handleClick}
    >
      {name}
    </Button>
  );
};

export default CategoryButton;
