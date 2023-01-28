import * as React from "react"
import { BannerProps } from "src/types/Common/ContentBanner/contentBannerProps"
import SessionHeroBanner from "./SessionHeroBanner"

const ContentHeroBanner = (props:BannerProps) => {
  console.log('Here-2');
  switch (props.Type.value) {
    case "Session":
      return <SessionHeroBanner {...props} />
    default:
      return <SessionHeroBanner {...props} />
  }
}

export default ContentHeroBanner
