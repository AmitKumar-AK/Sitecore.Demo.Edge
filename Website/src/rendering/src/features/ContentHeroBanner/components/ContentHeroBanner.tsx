import * as React from "react"
import { BannerProps } from "src/types/Common/ContentBanner/contentBannerProps"
import SessionHeroBanner from "./SessionHeroBanner"

const ContentHeroBanner = (props:BannerProps) => {
  switch (props.Type.value) {
    case "Session":
      return <SessionHeroBanner Rooms={[]} Day={[]} Timeslots={[]} {...props} />
    default:
      return <SessionHeroBanner Rooms={[]} Day={[]} Timeslots={[]} {...props} />
  }
}

export default ContentHeroBanner
