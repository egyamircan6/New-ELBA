import { BRANDS } from "@/constants/brands";
import { PRODUCTS } from "@/constants/products";

export function getBrandById(brandId: number) {
  return BRANDS.find((b) => b.id === brandId) || null;
}

export function getProductById(productId: number) {
  return PRODUCTS.find((p) => p.id === productId) || null;
}

export function getProductsByBrandId(brandId: number) {
  return PRODUCTS.filter((p) => p.brand_id === brandId);
}
