import { defaultClasses, getModelForClass, modelOptions, prop, Ref } from '@typegoose/typegoose';
import { RentalAmenities, City, RentalType, Coordinates } from '../../types/index.js';
import { UserEntity } from '../user/index.js';

// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
export interface OfferEntity extends defaultClasses.Base {}

@modelOptions({
  schemaOptions: {
    collection: 'offers'
  }
})

// eslint-disable-next-line @typescript-eslint/no-unsafe-declaration-merging
export class OfferEntity extends defaultClasses.TimeStamps {
  @prop({
    trim: true,
    required: true,
    type: () => String,
  })
  public title: string;

  @prop({
    trim: true,
    required: true,
    type: () => String,
  })
  public info: string;

  @prop({
    required: true,
    type: () => Date,
  })
  public date: Date;

  @prop({
    required: true,
    type: () => String,
    enum: City
  })
  public city: City;

  @prop({
    required: true,
    type: () => String,
  })
  public preview: string;

  @prop({
    required: true,
    default: [],
    type: () => Array<string>,
  })
  public photos: string[];

  @prop({
    required: true,
    type: () => Boolean,
  })
  public premium: boolean;

  @prop({
    required: true,
    type: () => Boolean,
  })
  public favorite: boolean;

  @prop({
    required: true,
    type: () => Number,
  })
  public rating: number;

  @prop({
    required: true,
    type: () => String,
    enum: RentalType
  })
  public type: RentalType;

  @prop({
    required: true,
    type: () => Number,
  })
  public rooms: number;

  @prop({
    required: true,
    type: () => Number,
  })
  public guests: number;

  @prop({
    required: true,
    type: () => Number,
  })
  public price: number;

  @prop({
    required: true,
    type: () => Array<string>,
  })
  public amenities: RentalAmenities[];

  @prop({
    required: true,
    ref: UserEntity,
    type: () => String
  })
  public renter: Ref<UserEntity>;

  @prop({
    type: () => Number,
    default: 0
  })
  public commentCount: number;

  @prop({
    required: true,
    type: () => Object,
  })
  public coordinates: Coordinates;
}

export const OfferModel = getModelForClass(OfferEntity);
