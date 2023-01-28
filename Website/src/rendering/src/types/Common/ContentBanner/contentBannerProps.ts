import { Room } from 'src/types/room';
import { Day } from 'src/types/day';
import { Timeslot } from 'src/interfaces/Timeslot';
import { BaseContent } from './baseContent';
import { Field } from '@sitecore-jss/sitecore-jss-nextjs';


export type ContentBannerProps =
  | SessionInformationPageHeroProps
  | BannerProps

export interface SessionInformationPageHeroProps extends BaseContent {
  Rooms: Room[];
  Day: Day[];
  Timeslots: Timeslot[];
  Premium: Field<boolean>;
}  

export type BannerProps = BaseContent
