import { IProduct } from './product';

export interface IPagnation
{
    pageIndex:number,
    pageSize:number,
    count:number,
    data:IProduct[]
}