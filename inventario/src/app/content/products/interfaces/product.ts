export interface Product {
    productId: number,
    name: string,
    description?: string,
    priceBuy: number,
    priceSell: number,
    brand: string,
    provider: string,
    category: string,
    presentation: string,
    barCode: string
}