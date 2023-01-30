import {  LayoutServicePageState, Text, useSitecoreContext } from '@sitecore-jss/sitecore-jss-nextjs';
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import SocialIcon from 'components/NonSitecore/SocialIcon';
import { InformationPageHeroProps } from 'src/types/Common/ContentBanner/contentBannerProps';
import SessionHeroBanner from './SessionHeroBanner';
import DisplayName from 'src/features/PageContent/components/DisplayName';
import DisplayTitle from 'src/features/PageContent/components/DisplayTitle';


const InformationPageHero = (props: InformationPageHeroProps): JSX.Element => {
  const { sitecoreContext } = useSitecoreContext();

  const isPageEditing = sitecoreContext.pageState === LayoutServicePageState.Edit;
  let lowerCaseQualificative ="";
  let imageSrc="";
 if(props.TemplateName=="Speaker")
  {
    lowerCaseQualificative = props?.Featured?.value ? 'featured' : '';
    imageSrc =props.Picture.value?.src
  }
  else if(props.TemplateName=="Vendor" || props.TemplateName=="Sponsor")
  {
    lowerCaseQualificative = props?.Level?.value ? props?.Level?.value.toLocaleLowerCase() : '';
    imageSrc =props.Logo.value?.src
  }
  
  const informations =
    props.JobTitle?.value ||
    props.Company?.value ||
    props.Location?.value ||
    isPageEditing ? (
      <>
        {props.JobTitle?.value || isPageEditing ? (
          <div>
            <span className="label">Job Title:</span>{' '}
            <Text field={props.JobTitle} tag="span" />
          </div>
        ) : undefined}
        {props.Company?.value || isPageEditing ? (
          <div>
            <span className="label">Company:</span> <Text field={props.Company} tag="span" />
          </div>
        ) : undefined}
        {props.Location?.value || isPageEditing ? (
          <div>
            <span className="label">Location:</span>{' '}
            <Text field={props.Location} tag="span" />
          </div>
        ) : undefined}
      </>
    ) : undefined;  

    const informationsHTML = informations ? (
      <div className="informations">{informations}</div>
    ) : undefined;

  return props.TemplateName == "Session" ? (
    <SessionHeroBanner Premium={undefined} Rooms={[]} Day={[]} Timeslots={[]} TemplateName={props.TemplateName} {...props} />
  ) : (
    <section
    className={`information-page-hero ${props.TemplateName.toLocaleLowerCase()}-information-page-hero ${lowerCaseQualificative}`}
  >
    <div className="content">
      <div className="image-container">
        {/* Purposefully not using a JSS Image component here to avoid width/height HTML attributes on the img tag */}
        <img src={imageSrc} alt="Image" loading="lazy" />
      </div>
      <div className="gradient-container"></div>
      <div className="content-container">
        <div className={`container-content-text`}>
          <div>
            <DisplayTitle Title={"Meet the <span className='information-type'>" + lowerCaseQualificative + "</span> " + props.TemplateName.toLocaleLowerCase() + ":"} />            
            <DisplayName Name={props.Name} />
          </div>
          {informationsHTML}
          <div className="external-website-icons">
            <SocialIcon Icon={faFacebookF} Link={props.FacebookProfileLink} />
            <SocialIcon Icon={faTwitter} Link={props.TwitterProfileLink} />
            <SocialIcon Icon={faLinkedinIn} Link={props.LinkedinProfileLink} />
            <SocialIcon Icon={faInstagram} Link={props.InstagramProfileLink} />
          </div>
        </div>
      </div>
    </div>
  </section>
  )
  
  /*
  (

    )*/
};

export default InformationPageHero;
