export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  image: string;
  rating: number;
  reviews: number;
  affiliateLink: string;
  description: string;
  category: string;
}

export interface Category {
  name: string;
  image: string;
  count: number;
}