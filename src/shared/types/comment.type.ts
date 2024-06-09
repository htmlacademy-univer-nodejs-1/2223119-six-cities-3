import { User } from './user.type.js';
import { RentalOffer } from './rental-offer.type.js';


export type Comment = {
  text: string;
  date: Date;
  rating: number;
  user: User;
  offer: RentalOffer;
}
