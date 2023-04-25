import { Order } from 'src/interface/order.interface';

export let orders: Order[] = [
    {id: '6', orderDate: new Date(), 
    productsOrdered:[
    {id: '2', productName: 'Milk', productPrice: 70},
    {id: '8', productName: 'Eggs', productPrice: 100}
  ]}, 
  {id: '16', orderDate: new Date(), 
  productsOrdered:[
  {id: '12', productName: 'Yogurt', productPrice: 70},
  {id: '18', productName: 'Bread', productPrice: 30},
  {id: '20', productName: 'Musli', productPrice: 130}
]}, 
{id: '7', orderDate: new Date(), 
productsOrdered:[
{id: '9', productName: 'Chocolate', productPrice: 60},
{id: '2', productName: 'Beer', productPrice: 50}
]}
  ];
