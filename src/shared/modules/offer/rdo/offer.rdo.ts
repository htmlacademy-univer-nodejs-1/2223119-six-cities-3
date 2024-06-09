import { Expose, Type } from 'class-transformer';
import { UserRdo } from '../../user/rdo/user.rdo.js';

export class OfferRdo {
  @Expose()
  public id: string;

  @Expose()
  public title: string;

  @Expose()
  public info: string;

  @Expose()
  public date: string;

  @Expose()
  public city: string;

  @Expose()
  public preview: string;

  @Expose()
  public photos: string[];

  @Expose()
  public premium: boolean;

  @Expose()
  public favorite: boolean;

  @Expose()
  public rating: number;

  @Expose()
  public type: string;

  @Expose()
  public rooms: number;

  @Expose()
  public guests: number;

  @Expose()
  public price: number;

  @Expose()
  public amenities: string[];

  @Expose({ name: 'userId'})
  @Type(() => UserRdo)
  public renter: UserRdo;

  @Expose()
  public commentCount: number;

  @Expose()
  public coordinates: [number, number];
}
