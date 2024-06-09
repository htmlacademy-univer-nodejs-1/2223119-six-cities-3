import { Expose, Type } from 'class-transformer';
import { UserRdo } from '../../user/rdo/user.rdo.js';
import { OfferRdo } from '../../offer/rdo/offer.rdo.js';

export class CommentRdo {
  @Expose()
  public id: string;

  @Expose()
  public text: string;

  @Expose()
  public rating: number;

  @Expose()
  @Type(() => OfferRdo)
  public offerId: OfferRdo;

  @Expose({ name: 'createdAt'})
  public date: string;

  @Expose({ name: 'userId' })
  @Type(() => UserRdo)
  public userId: UserRdo;
}
