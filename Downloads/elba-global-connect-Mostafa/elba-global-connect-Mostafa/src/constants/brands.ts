// src/constants/brands.ts
export type Brand = {
  id: number;
  name: string;
  slug: string; // used in API url
};

export const BRANDS: Brand[] = [
  { id: 22, name: 'Elba', slug: 'Elba' },
];
