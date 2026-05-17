import { Product, Testimonial } from './types';

// These will be replaced with real paths after image generation
// Using generated image paths or placeholders
export const PRODUCTS: Product[] = [
  {
    id: 'ic-1',
    name: 'Classic Scoop',
    category: 'Ice Cream',
    price: 'KSh 150',
    flavors: ['Vanilla', 'Strawberry', 'Chocolate', 'Mango'],
    image: '/src/assets/images/jolly_bells_hero_scoops_1779024345462.png',
    isBestSeller: true
  },
  {
    id: 'mk-1',
    name: 'Premium Milkshake',
    category: 'Milkshake',
    price: 'KSh 350',
    flavors: ['Mixed Berry', 'Oreo', 'Chocolate'],
    image: '/src/assets/images/jolly_bells_milkshake_premium_1779024362171.png',
    isBestSeller: true
  },
  {
    id: 'yg-1',
    name: 'Frozen Yogurt Swirl',
    category: 'Yogurt',
    price: 'KSh 300',
    flavors: ['Natural', 'Mango', 'Passion fruit'],
    image: '/src/assets/images/jolly_bells_yogurt_swirl_1779024383339.png',
    isBestSeller: true
  },
  {
    id: 'ip-1',
    name: 'Ice Pops & Sticks',
    category: 'Refreshments',
    price: 'KSh 50',
    flavors: ['Orange', 'Pineapple', 'Grape'],
    image: 'https://picsum.photos/seed/icepops/400/400',
  },
  {
    id: 'st-1',
    name: 'Simba Sticks',
    category: 'Treats',
    price: 'KSh 80',
    flavors: ['Chocolate', 'Milk'],
    image: 'https://picsum.photos/seed/simba/400/400',
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Njeri Kamau',
    content: "The creamiest ice cream in Kitengela! My kids absolutely love the bubblegum flavor.",
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?u=njeri'
  },
  {
    id: 't2',
    name: 'David Mutua',
    content: "Perfect spot for a weekend treat. The milkshakes are top-tier and the service is fast.",
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?u=david'
  },
  {
    id: 't3',
    name: 'Sarah Wambui',
    content: "Affordable and premium. The frozen yogurt with fresh mango is my daily addiction!",
    rating: 5,
    avatar: 'https://i.pravatar.cc/150?u=sarah'
  }
];

export const WHATSAPP_NUMBERS = ['254724052687', '254759441757'];
export const LOCATION_DESC = 'Old Namanga Road near Rontech Meleta Hospital, Kitengela';
