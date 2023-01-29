import { Room } from 'src/types/room';
import { Day } from 'src/types/day';
import { Timeslot } from 'src/interfaces/Timeslot';
import { BaseContent, SocialMediaProfiles } from './baseContent';
import { Field, ImageField } from '@sitecore-jss/sitecore-jss-nextjs';


export type ContentBannerProps =
  | SessionInformationPageHeroProps
  | InformationPageHeroProps
  | BannerProps

export interface SessionInformationPageHeroProps extends BaseContent {
  Rooms: Room[];
  Day: Day[];
  Timeslots: Timeslot[];
  Premium: Field<boolean>;
  TemplateName:string;
}  
export interface InformationPageHeroProps extends BaseContent,SocialMediaProfiles {
  Featured: Field<boolean>;
  Picture: ImageField;
  JobTitle: Field<string>;
  Company: Field<string>;
  Location: Field<string>;
  TemplateName:string;
  Logo: ImageField;
  Level: Field<string>;
}


export type BannerProps = BaseContent
