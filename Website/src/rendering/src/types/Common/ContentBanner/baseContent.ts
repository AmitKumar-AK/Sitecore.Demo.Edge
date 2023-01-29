
import { Field, ImageField } from '@sitecore-jss/sitecore-jss-nextjs';

export interface BaseContent {
  Name: Field<string>;
  Image: ImageField;
};

export interface SocialMediaProfiles {
  FacebookProfileLink?: Field<string>;
  TwitterProfileLink?: Field<string>;
  InstagramProfileLink?: Field<string>;
  LinkedinProfileLink?: Field<string>;
}