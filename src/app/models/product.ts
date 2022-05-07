export interface IProduct {
    id: number;
    name: string;
    description: string;
    price: number;
    pictureUrl: string;
    productType: string;
    productBrand: string;
}

export interface IProductToCreate {
    id: number;
    name: string;
    description: string;
    price: number;
    pictureUrl: string;
    productTypeId: number;
    productBrandId: number;
}

export class ProductFormValues implements IProductToCreate {
    id = 0;
    name = '';
    description = '';
    price = 0;
    pictureUrl = '';
    productBrandId = 0;
    productTypeId = 0;

    constructor(init?: ProductFormValues) {
    Object.assign(this, init);
    }
    
}