import { useSitecoreContext } from "@sitecore-jss/sitecore-jss-nextjs";
import * as React from "react"
import { BannerProps } from "src/types/Common/ContentBanner/contentBannerProps"
import InformationPageHero from "./InformationPageHero";
import SessionHeroBanner from "./SessionHeroBanner"

const ContentHeroBanner = (props:BannerProps) => {
  console.log('Here-1');
  const { sitecoreContext } = useSitecoreContext();
  const templateName =  sitecoreContext.route?.templateName;
  
  switch (templateName) {
    case "Session":
      return <SessionHeroBanner Premium={undefined} Rooms={[]} Day={[]} Timeslots={[]} TemplateName={templateName} {...props} />
    default:
      return <InformationPageHero  TemplateName={templateName} Featured={undefined} Picture={undefined} JobTitle={undefined} Company={undefined} Location={undefined} {...props} />
  }
  //return "";
}

export default ContentHeroBanner
