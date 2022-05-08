export interface IProductType
{
    id:number,
    name:string,
    pictureUrl:string
}


export interface ITypeToCreate {
    id:number,
    name:string,
    pictureUrl:string
}

export class TypeFormValues implements ITypeToCreate {
    id = 0;
    name = '';
    pictureUrl = 'any picture';

    constructor(init?: TypeFormValues) {
    Object.assign(this, init);
    }
    
}