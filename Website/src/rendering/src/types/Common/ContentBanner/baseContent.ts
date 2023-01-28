
import { Field, ImageField } from '@sitecore-jss/sitecore-jss-nextjs';

export interface BaseContent {
  Name: Field<string>;
  Image: ImageField;
  Premium: Field<boolean>;
  Heading: string;
  Type: { value: string }
};