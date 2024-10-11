import { LocationStore } from '@/types/type';
import { create } from 'zustand';

export const useLocationStore = create<LocationStore>((set) => ({
   userLatitude: null,
   userLongitude: null,
   userAddress: null,
   destinationLatitude: null,
   destinationLongitude: null,
   destinationAddress: null,
   setUserLocation: ({ latitude, longitude, address }) => set({ userLatitude: latitude, userLongitude: longitude, userAddress: address }),
   setDestinationLocation: ({ latitude, longitude, address }) =>
      set({ destinationLatitude: latitude, destinationLongitude: longitude, destinationAddress: address }),
}));
