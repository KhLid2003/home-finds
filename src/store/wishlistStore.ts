import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface WishlistStore {
  items: number[];
  addItem: (id: number) => void;
  removeItem: (id: number) => void;
  isInWishlist: (id: number) => boolean;
}

export const useWishlistStore = create<WishlistStore>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (id) => set((state) => ({ items: [...state.items, id] })),
      removeItem: (id) => set((state) => ({ items: state.items.filter((item) => item !== id) })),
      isInWishlist: (id) => get().items.includes(id),
    }),
    {
      name: 'wishlist-storage',
    }
  )
);