// src/constants/devices.ts
export const BRAND_ID = 22;

export type DeviceItem = {
  id: number;
  name: string;       // عربي (للـ UI)
  brand_id: number;
  slug: string;       // للـ API url (product)
};

export const DEVICES: DeviceItem[] = [
  { id: 132, name: "بوتاجاز",            brand_id: BRAND_ID, slug: "cooker" },
  { id: 133, name: "بوتاجاز بلت ان",     brand_id: BRAND_ID, slug: "cooker-builtin" },

  { id: 134, name: "فرن",               brand_id: BRAND_ID, slug: "oven" },
  { id: 135, name: "فرن بلت ان",        brand_id: BRAND_ID, slug: "oven-builtin" },

  { id: 136, name: "شفاط",              brand_id: BRAND_ID, slug: "hood" },
  { id: 137, name: "شفاط بلت ان",       brand_id: BRAND_ID, slug: "hood-builtin" },

  { id: 138, name: "غسالات-اطباق",      brand_id: BRAND_ID, slug: "dishwasher" },
  { id: 139, name: "غسالات اطباق بلت ان", brand_id: BRAND_ID, slug: "dishwasher-builtin" },
];
