import { useSitecoreContext } from "@sitecore-jss/sitecore-jss-nextjs";
import * as React from "react"
import { BannerProps } from "src/types/Common/ContentBanner/contentBannerProps"
import InformationPageHero from "./InformationPageHero";

const ContentHeroBanner = (props:BannerProps) => {
  const { sitecoreContext } = useSitecoreContext();
  const templateName =  sitecoreContext.route?.templateName;

  return <InformationPageHero  Rooms={[]} Day={[]} Timeslots={[]} Premium={undefined} Logo={undefined} 
      Level={undefined} TemplateName={templateName} Featured={undefined} Picture={undefined} JobTitle={undefined} 
      Company={undefined} Location={undefined} {...props} />

}

export default ContentHeroBanner
