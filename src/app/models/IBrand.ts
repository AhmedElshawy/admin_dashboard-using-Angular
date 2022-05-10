export interface IBrand
{
    id:number,
    name:string
}

export interface IBrandToCreate {
    id:number,
    name:string,
}

export class BrandFormValues implements IBrandToCreate {
    id = 0;
    name = '';
    
    constructor(init?: BrandFormValues) {
    Object.assign(this, init);
    }
}    