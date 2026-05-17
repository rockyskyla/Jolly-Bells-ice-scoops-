export interface Product {
  id: string;
  name: string;
  category: 'Ice Cream' | 'Yogurt' | 'Milkshake' | 'Refreshments' | 'Treats';
  price?: string;
  flavors?: string[];
  image: string;
  isBestSeller?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  content: string;
  rating: number;
  avatar: string;
}
