export interface IOrder {
  id: number;
  buyerEmail: string;
  orderDate: Date;
  shipToAddress: IAddress;
  deliveryMethod: string;
  shippingPrice: number;
  orderItems: IOrderItems[];
  subtotal: number;
  status: string;
  total: number;
}

export interface IAddress {
  city: string;
  fristName: string;
  lastName: string;
  state: string;
  street: string;
  zipCode: string;
}

export interface IOrderItems {
  pictureUrl: string;
  price: number;
  productId: number;
  productName: string;
  quantity: number;
}
