export interface Product {
    id: number,
    name: string,
    description?: string,
    priceBuy: number,
    priceSell: number,
    brandsId: number,
    providersId: number,
    categoriesId: number,
    presentationsId: number,
    quantity: number,
    barCode: string
}