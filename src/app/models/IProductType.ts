export interface IProductType
{
    id:number,
    name:string,
    pictureUrl:string
}


export interface ITypeToCreate {
    name:string,
    pictureUrl:string
}

export class TypeFormValues implements ITypeToCreate {
    name = '';
    pictureUrl = 'any picture';

    constructor(init?: TypeFormValues) {
    Object.assign(this, init);
    }
    
}