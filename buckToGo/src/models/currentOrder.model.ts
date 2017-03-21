// {
//   "foodItems": [
//     {
//       "name": "Cheese Pizza",
//       "price": 2.75
//     },
//     {
//       "name": "Hamburger",
//       "price": 2.5
//     }
//   ],
//   "customer": {
//     "firstName": "Vrund",
//     "lastName": "Patel",
//     "contactNumber": 1234567890,
//     "studentID": 111111
//   },
//   "payment\n": {
//     "paymentType": "Cash",
//     "total": 2.75
//   }
// }

import { Customer } from './customer.model';
import { Payment } from './payment.model';

export class CurrentOrder {
    foodItems: Object[];
    customer: Customer;
    payment: Payment;
}
