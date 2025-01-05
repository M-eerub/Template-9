export interface MenuItem {
  id: string;  // Explicitly defining id as string
  name: string;
  description: string;
  ingredients: string[];
  calories: number;
  priceRange: {
    min: number;
    max: number;
  };
  image: string;
  category: 'starter' | 'main' | 'desert' | 'drink';
}
