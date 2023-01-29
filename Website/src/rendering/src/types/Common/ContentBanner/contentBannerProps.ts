import { Room } from 'src/types/room';
import { Day } from 'src/types/day';
import { Timeslot } from 'src/interfaces/Timeslot';
import { BaseContent } from './baseContent';
import { Field, ImageField } from '@sitecore-jss/sitecore-jss-nextjs';


export type ContentBannerProps =
  | SessionInformationPageHeroProps
  | SpeakerInformationPageHeroProps
  | BannerProps

export interface SessionInformationPageHeroProps extends BaseContent {
  Rooms: Room[];
  Day: Day[];
  Timeslots: Timeslot[];
  Premium: Field<boolean>;
  TemplateName:string;
}  
export interface SpeakerInformationPageHeroProps extends BaseContent {
  Featured: Field<boolean>;
  Picture: ImageField;
  JobTitle: Field<string>;
  Company: Field<string>;
  Location: Field<string>;
  FacebookProfileLink?: Field<string>;
  TwitterProfileLink?: Field<string>;
  InstagramProfileLink?: Field<string>;
  LinkedinProfileLink?: Field<string>;
  TemplateName:string;
}

export type BannerProps = BaseContent
